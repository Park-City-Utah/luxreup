import React from 'react';
import { Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function AppText({children, style, ...otherProps}) {  //was props, destructured
    return (
        <Text style={[styles.text, style]} {...otherProps}>{children}</Text>//would bd props.childre  w/o destructure
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 30, 
        fontFamily: 'Roboto'
    }
})

export default AppText;