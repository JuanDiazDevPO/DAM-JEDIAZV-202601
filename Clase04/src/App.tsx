import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { styles } from "./App.style";
import HomeScreen from "./components/screens/HomeScreen";



const App =()=>{
return(
  <SafeAreaProvider>
    <Pressable onPress={()=>{console.log("sdfsd")}}>
    <HomeScreen></HomeScreen>
    </Pressable>
  </SafeAreaProvider>
)
  
  
}; 
export default App; 