import {
  Alert,
  Dimensions,
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import InputText from '../component/InputText';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/PostSlice';
import { useNavigation } from '@react-navigation/native';
import useScreenBackground from '../hooks/useScreenBackground';

const Add = () => {
  const [photo, setPhoto] = useState({
    assets: [
      {
        uri: '',
        width: 0,
        height: 0,
        fileName: '',
        fileSize: 0,
        type: '',
      },
    ],
  });
  const Background = useScreenBackground();
  const [name, setName] = useState<null | string>(null);
  const [description, setDescription] = useState<null | string>(null);
  const [price, setPrice] = useState<null | string | number>(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      quality: 1,
    });
    if (!result.didCancel) {
      setPhoto(result as any);
    }
    console.log(result);
  };

  const addItem = () => {
    if (
      name === null ||
      description === null ||
      price === null ||
      selectedCategory === null ||
      photo.assets[0].uri === ''
    ) {
      ToastAndroid.show('Please fill all the fields', ToastAndroid.CENTER);
    } else {
      dispatch(
        addPost({
          photo: photo.assets[0].uri,
          name,
          description,
          price,
          category: selectedCategory,
        }),
      );
      setName(null);
      setDescription(null);
      setPrice(null);
      setPhoto({
        assets: [
          {
            uri: '',
            width: 0,
            height: 0,
            fileName: '',
            fileSize: 0,
            type: '',
          },
        ],
      });
      setSelectedCategory(null);
      navigation.navigate('Home' as never);
    }
  };

  const openGallary = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      quality: 1,
    });
    if (!result.didCancel) {
      setPhoto(result as any);
    }
    console.log(result);
  };

  return (
    <ScrollView style={styles.container}>
      <Background />
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Post</Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={requestCameraPermission}
        >
          {photo.assets[0].uri == '' ? (
            <Image
              source={require('../images/pictures.png')}
              style={styles.imagePlaceholder}
            />
          ) : (
            <Image
              source={{ uri: photo.assets[0].uri }}
              style={styles.imagePlaceholder}
            />
          )}
        </TouchableOpacity>
        <InputText
          style={styles.input}
          keyboardType="default"
          placeholder="Enter Item name"
          placeHolderTextColor="#aaaaaa"
          value={name as string}
          onChangeText={setName}
        />
        <InputText
          style={styles.input}
          keyboardType="default"
          placeholder="Enter Item Description"
          placeHolderTextColor="#aaaaaa"
          value={description as string}
          onChangeText={setDescription}
        />
        <InputText
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Enter Item Price"
          placeHolderTextColor="#aaaaaa"
          value={price as string}
          onChangeText={text => setPrice(text)}
        />
        <View style={styles.blankSpace} />
        <Text style={styles.label}>Category</Text>
        <View style={styles.blankSpace} />
        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={[
              styles.categorySelector,
              selectedCategory === 'New Book'
                ? { backgroundColor: '#00b7ffde', borderColor: '#00b7ffde' }
                : { backgroundColor: '#ffffff', borderColor: '#000000' },
            ]}
            onPress={() => setSelectedCategory('New Book')}
          >
            <Text
              style={[
                styles.inputText,
                selectedCategory === 'New Book'
                  ? { color: '#ffffff' }
                  : { color: '#000000' },
              ]}
            >
              New Book
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categorySelector,
              selectedCategory === 'Old Book'
                ? { backgroundColor: '#00b7ffde', borderColor: '#00b7ffde' }
                : { backgroundColor: '#ffffff', borderColor: '#000000' },
            ]}
            onPress={() => setSelectedCategory('Old Book')}
          >
            <Text
              style={[
                styles.inputText,
                selectedCategory === 'Old Book'
                  ? { color: '#ffffff' }
                  : { color: '#000000' },
              ]}
            >
              Old Book
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categorySelector,
              selectedCategory === 'Stickers'
                ? { backgroundColor: '#00b7ffde', borderColor: '#00b7ffde' }
                : { backgroundColor: '#ffffff', borderColor: '#000000' },
            ]}
            onPress={() => setSelectedCategory('Stickers')}
          >
            <Text
              style={[
                styles.inputText,
                selectedCategory === 'Stickers'
                  ? { color: '#ffffff' }
                  : { color: '#000000' },
              ]}
            >
              Stickers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categorySelector,
              selectedCategory === 'Copies'
                ? { backgroundColor: '#00b7ffde', borderColor: '#00b7ffde' }
                : { backgroundColor: '#ffffff', borderColor: '#000000' },
            ]}
            onPress={() => setSelectedCategory('Copies')}
          >
            <Text
              style={[
                styles.inputText,
                selectedCategory === 'Copies'
                  ? { color: '#ffffff' }
                  : { color: '#000000' },
              ]}
            >
              Copies
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={[
              styles.categorySelector,
              selectedCategory === 'Furniture'
                ? { backgroundColor: '#00b7ffde', borderColor: '#00b7ffde' }
                : { backgroundColor: '#ffffff', borderColor: '#000000' },
            ]}
            onPress={() => setSelectedCategory('Furniture')}
          >
            <Text
              style={[
                styles.inputText,
                selectedCategory === 'Furniture'
                  ? { color: '#ffffff' }
                  : { color: '#000000' },
              ]}
            >
              Furniture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categorySelector,
              selectedCategory === 'House'
                ? { backgroundColor: '#00b7ffde', borderColor: '#00b7ffde' }
                : { backgroundColor: '#ffffff', borderColor: '#000000' },
            ]}
            onPress={() => setSelectedCategory('House')}
          >
            <Text
              style={[
                styles.inputText,
                selectedCategory === 'House'
                  ? { color: '#ffffff' }
                  : { color: '#000000' },
              ]}
            >
              House
            </Text>
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity style={styles.btn} onPress={addItem}>
          <Text style={styles.btnText}>Post My Item</Text>
        </TouchableOpacity>
        <View style={styles.blankSpace} />
      </View>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inputText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
  },
  blankSpace: {
    height: Dimensions.get('window').height * 0.02,
    width: '100%',
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#9ceaff34',
    borderWidth: 0.5,
    borderColor: '#00b7ffde',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagePlaceholder: {
    width: 200,
    height: 150,
    alignSelf: 'center',
  },
  imageContainer: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 10,
    marginVertical: 15,
    backgroundColor: '#ffffff',
    elevation: 5,
    borderRadius: 10,
  },
  input: {
    marginTop: 10,
    width: '100%',
    alignSelf: 'center',
    borderWidth: 0.7,
    borderColor: '#aaaaaa',
    borderRadius: 10,
    height: 50,
    paddingLeft: 10,
  },
  categorySelector: {
    marginTop: 10,
    width: '30%',
    alignSelf: 'center',
    borderWidth: 0.7,
    borderColor: '#aaaaaa',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 15,
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    elevation: 5,
    borderColor: '#00b7ffde',
    borderWidth: 0.3,
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#686868ff',
  },
});
