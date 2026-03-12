/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CountScreen from './Components/Screens/countScreen/CountScreen';
import { appStyles } from './App.styles';

type AppProps = {
  atributo: string;
} 
  let count = 0;
  const handleOnPress = (value : number)=>{
    
    count++;
    console.log(count +  "PAI")
    console.log("preess buton"); 
  };
export class App extends React.Component<AppProps>{
  private count: number = 0;
  private label: string = 'hello';


  handleOnPress2x = ()=>{

    this.count=+2;
    console.log(this.count +  "PAI")
  console.log("preess buton"); 
};

  render(){

    const label  ="Hello world"
    const name = "juan"
  return (
    <View style={appStyles.safeArea}>
      <StatusBar/>
        <CountScreen label={this.label} OnPress={()=> handleOnPress(1)}></CountScreen>
    </View>
  );
  }
}


export default App;
