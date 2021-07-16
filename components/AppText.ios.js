import React from 'react';
import { Text, StyleSheet } from 'react-native';

import colors from '../config/Colors';

function AppText({children, style}) {  //was props, destructured
    return (
        <Text style={[styles.text, style]}>{children}</Text>//would be props.children  w/o destructure
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 30, 
        fontFamily: 'Avenir',
    }
})

export default AppText;