import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


import AssetExample from './components/AssetExample';


export default function App() {
  return (
    <View style={styles.container}>
      <AssetExample />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>I already have an account</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#78c800',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginVertical: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
button2: {
  backgroundColor: '#fff',
  borderRadius: 4,
  padding: 16,
  alignItems: 'center',
  marginVertical: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,


  },
  buttonText2: {
    color: '#78c800',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
