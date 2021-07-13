import React from 'react';
import { StyleSheet, View, onPress } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/Colors';

function ListItemCloseAction( {onPress} ) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="close-box-outline"
                    size={30}
                    color={colors.white}
                />
            </View> 
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        width: 100,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {

    },
    touch: {
    },
})

export default ListItemCloseAction;