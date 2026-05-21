import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../Routes';
import { ProductService, SaleService } from '../../core/services';
import AuthRepository from '../../core/repositories/authRepository/AuthRepository';
import { Product, User } from '../../core/entities';
import { SearchBar } from '../../components/molecules';
import { ProductCard, SellModal } from '../../components/organism';
import styles from './HomePageStyles';

const HomePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const loadProducts = useCallback(async () => {
    const currentUser = await AuthRepository.get();
    if (currentUser) {
      setUser(currentUser);
      const prods = ProductService.getByUsername(currentUser.username);
      setProducts(prods);
      setFiltered(prods);
      setSearch('');
    }
  }, []);

  useFocusEffect(loadProducts);

  const handleSearch = (text: string) => {
    setSearch(text);
    const lower = text.toLowerCase();
    setFiltered(
      text
        ? products.filter(
            p =>
              p.nombre.toLowerCase().includes(lower) ||
              p.sku.toLowerCase().includes(lower)
          )
        : products
    );
  };

  const handleSell = (qty: number) => {
    if (!selectedProduct) return;
    try {
      SaleService.sell(selectedProduct, qty);
      const prods = ProductService.getByUsername(selectedProduct.username);
      setProducts(prods);
      setFiltered(
        search
          ? prods.filter(
              p =>
                p.nombre.toLowerCase().includes(search.toLowerCase()) ||
                p.sku.toLowerCase().includes(search.toLowerCase())
            )
          : prods
      );
      setSelectedProduct(null);
      Alert.alert('Venta registrada', `${qty} x ${selectedProduct.nombre}`);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleLogout = async () => {
    AuthRepository.delete();
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.greeting}>{'Bienvenido,\n'}{user?.nombre ?? user?.username}</Text>
          <Pressable style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>CERRAR{'\n'}SESIÓN</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.newProductButton}
          onPress={() => navigation.navigate('RegisterProduct')}>
          <Text style={styles.newProductText}>Nuevo Producto</Text>
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <SearchBar value={search} onChangeText={handleSearch} />
      </View>

      <Text style={styles.sectionTitle}>Recent Products</Text>

      <FlatList
        data={filtered}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProductCard product={item} onSell={setSelectedProduct} />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Sin productos aún</Text>
            <Text style={styles.emptySubtext}>Toca "Nuevo Producto" para agregar uno</Text>
          </View>
        }
      />

      <SellModal
        product={selectedProduct}
        onConfirm={handleSell}
        onCancel={() => setSelectedProduct(null)}
      />
    </SafeAreaView>
  );
};

export default HomePage;
