import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

const ItemsByCategory = () => {
  const route = useRoute();
  const [itemList, setItemList] = useState([]);
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
      <Text>ItemsByCategory</Text>
    </View>
  );
};

export default ItemsByCategory;

const styles = StyleSheet.create({});
