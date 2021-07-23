import React, { useState } from 'react';
import { StyleSheet, View, onPress } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../../config/Colors';

function ListItemDeleteAction( {onPress} ) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={30}
                    color={colors.white}
                />      
            </View> 
        </TouchableWithoutFeedback>
        );
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 100,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',

    },
    touchable: {
    }
})

export default ListItemDeleteAction;