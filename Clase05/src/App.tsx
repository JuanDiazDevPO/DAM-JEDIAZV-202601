import React from 'react';
import { StatusBar, View } from 'react-native';
import CountScreen from './Components/Screens/countScreen/CountScreen';
import { appStyles } from './App.styles';

type AppProps = {
  atributo?: string;
};

type AppState = {
  num1: number;
  num2: number;
  result: number;
};

export class App extends React.Component<AppProps, AppState> {
  private label: string = 'Resultado';

  state: AppState = {
    num1: 10,
    num2: 5,
    result: 0,
  };

  handleSum = () => {
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
    console.log(result + ' PAI');
  };

  handleRest = () => {
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
    console.log(result + ' PAI');
  };

  render() {
    return (
      <View style={appStyles.safeArea}>
        <StatusBar />
        <CountScreen
          label={`Suma: ${this.state.num1} + ${this.state.num2} = ${this.state.result}`}
          OnPress={this.handleSum}
        />
        <CountScreen
          label={`Resta: ${this.state.num1} - ${this.state.num2} = ${this.state.result}`}
          OnPress={this.handleRest}
        />
      </View>
    );
  }
}

export default App;