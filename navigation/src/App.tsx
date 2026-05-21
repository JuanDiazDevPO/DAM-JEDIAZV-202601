import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react, { useEffect, useState } from "react";
import { View } from "react-native";
import { AuthStackParamList } from "./Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LoginPage, RegisterPage, HomePage, RegisterProductPage } from "./screens";
import { setupDatabase } from "./core/config";

const Stack = createNativeStackNavigator<AuthStackParamList>();
const App = ()=>{
  const [dbReady, setDbReady] = useState(false);

  useEffect(() => {
    setupDatabase();
    setDbReady(true);
  }, []);

  if (!dbReady) {
    return <View style={{ flex: 1 }} />;
  }

  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
          initialRouteName="Login"
          screenOptions={
            {headerShown: false,
              contentStyle:{
                backgroundColor:"#fff"
              }
            }
          }>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="RegisterProduct" component={RegisterProductPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}


export default App;