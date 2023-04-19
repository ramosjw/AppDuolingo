import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/duolingo.png')} />
      <Text style={styles.paragraph}>
      <Text style={[styles.buttonText, {color: '#a9a7aa'}]}>Learn a language for free.
      Forever.</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 95,
  },
  paragraph: {
    margin: 10,
    marginTop: 10,
    height: 180,
    padding: 0,
    fontSize: 14,
    fontWeight: 'Feather Bold',
    textAlign: 'center',
  },
  logo: {
    height: 220,
    width: 220,
  }
});