import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { useState, useEffect } from 'react';
import { StyleSheet, Image, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ImageSelector({ imageUri,  onChangeImage }) {
  //useEffect rather than use componentDidMount
  useEffect(() => {
    requestPermission();
   // selectImage();
  }, [])


  //This will remember choice, so have to reset
  const requestPermission = async () => {
    const { granted } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

    if( !granted  ) { //granted is destructured.. from result.granted
      alert('You need to enable image library access!');
    }
  }

  const handlePress = () => {
      if(!imageUri) {
        selectImage(); 
        }
    else Alert.alert('Delete', 'Are you sure you want to delete?',[
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No'}
    ])
  }

  const selectImage = async () => {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({ 
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5
        });
        if(!result.cancelled) { 
          onChangeImage(result.uri);
        }
      }
      catch (error) {
        console.log("Error", error);
      }
    }

  return (
    <TouchableWithoutFeedback onPress={handlePress} >  
        <View style={styles.container} >
            {!imageUri && <MaterialCommunityIcons
                style={styles.icon}
                name="camera"
                size={40}
                color={colors.medium}
                    />
            }
            {imageUri && <Image 
                source={{ uri: imageUri}} style={styles.image}/>}
        </View>
    </TouchableWithoutFeedback>  
    );
}

const styles = StyleSheet.create({
  icon: {
      marginLeft: -10
  },
  container: {
    width: 200, 
    height: 200, 
    borderRadius: 25, 
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: "100%", 
    height: "100%", 
    borderRadius: 25
  }
})

export default ImageSelector;