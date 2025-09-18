import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import InputText from '../component/InputText';
import { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState<string>('');
  const items = useSelector(state => state.post);
  const [itemList, setItemList] = useState(items.data);
  const filterList = (text: string) => {
    let tempList = items.data;
    let temp = tempList.filter((item: any) => {
      return item.name.toLowerCase().match(text.toLowerCase());
    });
    setItemList(temp);
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <InputText
          placeholder="Search for products"
          style={styles.inputStyle}
          placeHolderTextColor={'grey'}
          onChangeText={text => {
            setSearchText(text);
            filterList(text);
          }}
          value={searchText}
        />
        <Image
          source={require('../images/search.png')}
          style={styles.searchIcon}
        />
      </View>
      <FlatList
        data={itemList}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} activeOpacity={0.6}>
            <Image source={{ uri: item?.photo }} style={styles.itemImage2} />
            <View style={styles.itemContainer3}>
              <View style={styles.itemContainer2}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemSubtitle}>{item.description}</Text>
                <Text style={styles.itemPrice}>{'INR' + ' ' + item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  inputStyle: {
    fontSize: 16,
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
  itemContainer2: {
    marginLeft: 15,
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
  itemContainer3: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '72%',
  },
});
