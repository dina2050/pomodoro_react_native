import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Timer } from './src/components/Timer'
import {ChooseTime} from "./src/components/ChooseTime";
import {Test} from "./src/components/Test";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidemode: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width:30,
    margin: 5,
    borderWidth: 1,
    textAlign:"center"
  },

  row: {
    flexDirection:'row',
    marginBottom:10
  },

  buttons: {
    flexDirection:'row',
    marginBottom:5,
    justifyContent:"space-around"
  },

})
class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Test />
        </View>
    )
  }

}

export default App;
