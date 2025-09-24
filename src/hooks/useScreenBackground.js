import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

let LinearGradient;
try {
  // First try expo-linear-gradient
  LinearGradient = require('expo-linear-gradient').LinearGradient;
} catch (e) {
  LinearGradient = require('react-native-linear-gradient').default;
}

const { width } = Dimensions.get('window');
const circleSize = width * 2;

export default function useScreenBackground() {
  const Background = () => (
    <View style={StyleSheet.absoluteFill}>
      {/* Base gradient */}
      <LinearGradient
        colors={['#e9fdff', '#ffffff', '#e9fdff']}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      {/* Top glow */}
      <LinearGradient
        colors={['#bdf8ff', 'transparent']}
        style={styles.topGlow}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      {/* Bottom glow */}
      <LinearGradient
        colors={['transparent', '#bdf8ff']}
        style={styles.bottomGlow}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
    </View>
  );

  return Background;
}

const styles = StyleSheet.create({
  topGlow: {
    position: 'absolute',
    top: -circleSize / 1.5,
    alignSelf: 'center',
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    opacity: 0.5,
  },
  bottomGlow: {
    position: 'absolute',
    bottom: -circleSize / 1.5,
    alignSelf: 'center',
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    opacity: 0.5,
  },
});
