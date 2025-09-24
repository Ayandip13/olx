import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useScreenBackground from '../hooks/useScreenBackground';

const User = () => {
  const Background = useScreenBackground();
  return (
    <View style={styles.container}>
      <Background />
      <Text>User</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
