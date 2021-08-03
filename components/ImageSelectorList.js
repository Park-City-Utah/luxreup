import React, {useRef} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageSelector from './ImageSelector';

function ImageSelectorList( { imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef();

    return (
      <View>
        <ScrollView
          ref={scrollView}
          horizontal
          onContentSizeChange={() => scrollView.current.scrollToEnd()}
        >
          <View style={styles.container}>
            {imageUris.map((uri) => (
              <View key={uri} style={styles.image}>
                <ImageSelector
                  imageUri={uri}
                  onChangeImage={() => onRemoveImage(uri)}
                />
              </View>
            ))}
            <ImageSelector onChangeImage={(uri) => onAddImage(uri)} />
          </View>
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
  }, 
  image: {
      marginRight: 10
  }
});

export default ImageSelectorList;