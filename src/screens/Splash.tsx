import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import useScreenBackground from '../hooks/useScreenBackground';

const Splash = () => {
  const navigation = useNavigation();
  const opacity = useSharedValue(0);
  const Background = useScreenBackground();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          scale: withTiming(opacity.value, {
            duration: 1200,
            easing: Easing.out(Easing.exp),
          }),
        },
      ],
    };
  });

  useEffect(() => {
    // fade in
    opacity.value = withTiming(1, {
      duration: 1200,
      easing: Easing.out(Easing.exp),
    });

    // navigate after animation
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation, opacity]);

  return (
    <View style={styles.container}>
      <Background />
      <Animated.Text style={[styles.logo, animatedStyle]}>Bookosaurs</Animated.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#006dacff',
    letterSpacing: 2,
  },
});
