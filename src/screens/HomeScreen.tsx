import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View style={styles.bottomTabs}>
        <TouchableOpacity style={styles.tabs} onPress={() => setSelectedTab(0)}>
          <Image
            source={require('../images/home.png')}
            style={[
              styles.tabIcons,
              { tintColor: selectedTab === 0 ? 'blue' : '#000' },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs} onPress={() => setSelectedTab(1)}>
          <Image
            source={require('../images/search.png')}
            style={[
              styles.tabIcons,
              { tintColor: selectedTab === 1 ? 'blue' : '#000' },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs} onPress={() => setSelectedTab(2)}>
          <Image
            source={require('../images/plus.png')}
            style={[
              styles.tabIcons,
              { tintColor: selectedTab === 2 ? 'blue' : '#000' },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs} onPress={() => setSelectedTab(3)}>
          <Image
            source={require('../images/heart.png')}
            style={[
              styles.tabIcons,
              { tintColor: selectedTab === 3 ? 'blue' : '#000' },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs} onPress={() => setSelectedTab(4)}>
          <Image
            source={require('../images/account.png')}
            style={[
              styles.tabIcons,
              { tintColor: selectedTab === 4 ? 'blue' : '#000' },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#c4c4c462',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tabs: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 20,
  },
  tabIcons: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
