import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import InputText from '../component/InputText';
import { useSelector } from 'react-redux';

const Home = () => {
  const [searchText, setSearchText] = useState<string>('');
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
  const items = useSelector(state => state.post);
  console.log('items', items);
  const data2 = items.data;
  return (
    <ScrollView nestedScrollEnabled={false} style={styles.container}>
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
        style={styles.flatList}
        data={data}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.6} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.heading}>Posted Items</Text>
      <View style={styles.blankContainer} />
      <FlatList
        data={data2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} activeOpacity={0.6}>
            <Image source={{ uri: item?.photo }} style={styles.itemImage2} />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '72%',
              }}
            >
              <View style={styles.itemContainer2}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemSubtitle}>{item.description}</Text>
                <Text style={styles.itemPrice}>{'INR' + ' ' + item.price}</Text>
              </View>
              <View style={styles.itemCategoryContainer}>
                <Text style={styles.itemCategory}>{item.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  itemCategoryContainer: {
    backgroundColor: '#00c3ff59',
    borderWidth: 1,
    borderColor: '#00c3ff',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  itemCategory: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    padding: 2,
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
    width: 60,
    height: 60,
    margin: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b7ebff3f',
    margin: 4,
    borderRadius: 10,
    paddingBottom: 5,
  },
  blankContainer: {
    height: Dimensions.get('window').height * 0.02,
    width: '100%',
  },
  flatList: {
    flexGrow: 0,
    height: Dimensions.get('window').height * 0.28,
  },
  item: {
    width: '90%',
    height: 100,
    backgroundColor: '#b7ebff3f',
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage2: {
    width: 70,
    height: 70,
    marginLeft: 10,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemSubtitle: {
    fontSize: 14,
    color: 'grey',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  itemContainer2: {
    marginLeft: 15,
  },
});
