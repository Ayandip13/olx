import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import InputText from '../component/InputText';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const data = [
    {
      id: '1',
      title: 'Car',
      image: require('../images/car.png'),
    },
    {
      id: '2',
      title: 'Bike',
      image: require('../images/bycicle.png'),
    },
    {
      id: '3',
      title: 'Mobile',
      image: require('../images/mobile-app.png'),
    },
    {
      id: '4',
      title: 'Laptop',
      image: require('../images/laptop-screen.png'),
    },
    {
      id: '5',
      title: 'House',
      image: require('../images/house.png'),
    },
    {
      id: '6',
      title: 'Furniture',
      image: require('../images/furniture.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Olx clone</Text>
      <View style={styles.searchBox}>
        <InputText
          placeholder="Search for products"
          style={styles.inputStyle}
          placeHolderTextColor={'grey'}
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        <Image
          source={require('../images/search.png')}
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.blankContainer} />
      <Text style={styles.heading}>What are you looking for...</Text>
      <View style={styles.blankContainer} />
      <FlatList
        data={data}
        // contentContainerStyle={{ paddingBottom: 20 }}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingBottom: 300,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 20,
  },
  searchBox: {
    height: 50,
    alignSelf: 'center',
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'space-between',
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  inputStyle: {
    fontSize: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  itemImage: {
    width: 80,
    height: 80,
    margin: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cfcfcf81',
    margin: 4,
    borderRadius: 10,
    paddingBottom: 10,
  },
  blankContainer: {
    height: Dimensions.get('window').height * 0.02,
    width: '100%',
  },
});
