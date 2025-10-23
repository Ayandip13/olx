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
import { useState } from 'react';
import InputText from '../component/InputText';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addToWishList } from '../redux/WishListSlice';
import useScreenBackground from '../hooks/useScreenBackground.js';

const Home = () => {
  const [searchText, setSearchText] = useState<string>('');
  const navigation = useNavigation();
  const Background = useScreenBackground();
  const dispatch = useDispatch();
  const data = [
    {
      id: '1',
      title: 'New Books',
      image: require('../images/new-book.png'),
    },
    {
      id: '2',
      title: 'Old Books',
      image: require('../images/old-book.png'),
    },
    {
      id: '3',
      title: 'Copies',
      image: require('../images/excersize-book.png'),
    },
    {
      id: '4',
      title: 'Stickers',
      image: require('../images/stickers.png'),
    },
  ];
  const items = useSelector((state: any) => state.post);
  console.log('items', items);
  const data2 = items.data;
  return (
    <ScrollView nestedScrollEnabled={false} style={styles.container}>
      <Background />
      <Text style={styles.logo}>Bookosaurs</Text>
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ItemsByCategory', { category: item.title })
            }
            activeOpacity={0.6}
            style={styles.itemContainer}
          >
            <Image source={item.image} style={styles.itemImage} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.heading}>Posted Items</Text>
      <View style={styles.blankContainer} />
      <FlatList
        data={data2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.postedItemCard} activeOpacity={0.7}>
            <Image
              source={{ uri: item?.photo }}
              style={styles.postedItemImage}
            />
            <View style={styles.postedItemContent}>
              <View style={styles.postedItemTopRow}>
                <Text style={styles.postedItemName}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('WishList' as never);
                    dispatch(addToWishList(item));
                  }}
                  activeOpacity={0.6}
                >
                  <Image
                    source={require('../images/heart.png')}
                    tintColor={'#00c3ff'}
                    style={styles.heart}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.postedItemDescription}>
                {item.description}
              </Text>

              <View style={styles.postedItemBottomRow}>
                <Text style={styles.postedItemPrice}>₹ {item.price}</Text>
                <View style={styles.postedItemCategoryContainer}>
                  <Text style={styles.postedItemCategory}>{item.category}</Text>
                </View>
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
  heart: {
    height: 20,
    width: 20,
  },
  postedItemTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  itemContainer3: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '72%',
  },
  itemCategoryContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#00c3ff',
    borderRadius: 20,
    paddingVertical: 5,
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
    color: '#006dacff',
    marginTop: 20,
  },
  searchBox: {
    height: 50,
    alignSelf: 'center',
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'grey',
    justifyContent: 'space-between',
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    elevation: 5,
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
    backgroundColor: '#ffffff',
    borderColor: '#00c3ff',
    borderWidth: 0.5,
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
    backgroundColor: '#ffffff',
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
  postedItemCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    elevation: 5,
  },
  postedItemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  postedItemContent: {
    flex: 1,
    flexDirection: 'column',
  },
  postedItemName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  postedItemDescription: {
    fontSize: 14,
    color: 'grey',
    flexShrink: 1,
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  postedItemBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postedItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  postedItemCategoryContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: '#00c3ff',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    // elevation: 5,
  },
  postedItemCategory: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
});
