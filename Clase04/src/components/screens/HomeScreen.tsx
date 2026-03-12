
import { SafeAreaView, Text, View } from "react-native"
import { styles } from "../../App.style"
import { SafeAreaProvider } from "react-native-safe-area-context"


export const HomeScreen=() => {
      return(
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text style={styles.text}>hola</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
    
}

export default HomeScreen();