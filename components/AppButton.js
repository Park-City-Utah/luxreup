import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({ title, onPress, color}) {  //was props, destructured
    return (
        //Following allows us to append colors (custom) at instantiation of object
        <TouchableOpacity style={[styles.appButton, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.appButtontText}>{title}</Text>
        </TouchableOpacity>

        );
}

const styles = StyleSheet.create({
    appButton: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10,
        width: '100%'
    },
    appButtontText: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default AppButton;