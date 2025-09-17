import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

const ItemsByCategory = () => {
  const route = useRoute();
  const [itemList, setItemList] = useState<string[]>([]);
  const items = useSelector(state => state.post);
  useEffect(() => {
    let tempData = items.data;
    let tem: any = [];
    tempData.map(item => {
      if (item.category === route.params.category) {
        tem.push(item);
      }
    });
    setItemList(tem);
  }, []);
  return (
    <View>
      <FlatList
        data={itemList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} activeOpacity={0.6}>
            <Image source={{ uri: item?.photo }} style={styles.itemImage2} /> 
            <View style={styles.itemContainer3}>
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
    </View>
  );
};

export default ItemsByCategory;

const styles = StyleSheet.create({
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
