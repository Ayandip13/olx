import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import InputText from '../component/InputText';

const Add = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Post</Text>
      </View>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={require('../images/pictures.png')}
          style={styles.imagePlaceholder}
        />
      </TouchableOpacity>
      <InputText
        style={styles.input}
        keyboardType="default"
        placeholder="Enter Item name"
        placeHolderTextColor="#aaaaaa"
      />
      <InputText
        style={styles.input}
        keyboardType="default"
        placeholder="Enter Item Description"
        placeHolderTextColor="#aaaaaa"
      />
      <InputText
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Enter Item Price"
        placeHolderTextColor="#aaaaaa"
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Post My Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    elevation: 7,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagePlaceholder: {
    width: 130,
    height: 130,
    alignSelf: 'center',
  },
  imageContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    marginVertical: 15,
    backgroundColor: 'rgba(106, 213, 255, 0.25)',
    borderRadius: 10,
  },
  input: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 0.7,
    borderColor: '#aaaaaa',
    borderRadius: 10,
    height: 50,
    paddingLeft: 10,
  },
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#4bccff3f',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
