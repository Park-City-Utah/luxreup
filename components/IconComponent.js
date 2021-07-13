import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function IconComponent({ 
    name="email", 
    size = 40, 
    backgroundColor="#000", 
    iconColor="#fff" 
}) {
    return (
        <View style= {{
            height: size,
            width: size,
            borderRadius: size/2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <MaterialCommunityIcons
            name={name}
            color={iconColor}
            size={size * 0.5}
            ></MaterialCommunityIcons>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {

    },

})

export default IconComponent;