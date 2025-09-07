import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OLX</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adbcffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    fontSize:30,
    fontWeight:'bold',
    color:'#000'
  }
});
