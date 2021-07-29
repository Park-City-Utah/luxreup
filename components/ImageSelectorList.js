import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageSelector from './ImageSelector';

function ImageSelectorList( { imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
        {imageUris.map((uri) => ( //Map list to ImageSelector Component(s)
            <ImageSelector 
                imageUri={uri} 
                key={uri}
                onChangeImage={() => onRemoveImage(uri)}
            />
        ))}
        <ImageSelector onChangeImage={(uri) => onAddImage(uri)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
  }
});

export default ImageSelectorList;