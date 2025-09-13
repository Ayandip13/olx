import {
  Alert,
  Image,
  Linking,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import InputText from '../component/InputText';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/PostSlice';
import { useNavigation } from '@react-navigation/native';

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
  const [name, setName] = useState<null | string>(null);
  const [description, setDescription] = useState<null | string>(null);
  const [price, setPrice] = useState<null | string | number>(null);
  const dispatch = useDispatch();

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
    dispatch(addPost({ photo: photo.assets[0].uri, name, description, price }));
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
    Alert.prompt('Item Added Successfully');
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Post</Text>
      </View>
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
      <TouchableOpacity style={styles.btn} onPress={addItem}>
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
    width: 200,
    height: 150,
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
