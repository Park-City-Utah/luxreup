import { lightgray } from 'color-name';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../config/colors';

function ListItemSeperator() {
    return (
        <View style={styles.seperator}/>
    );
}

const styles = StyleSheet.create({
    seperator: {
        width: '100%' ,
        height: 1,
        backgroundColor: Colors.light
    }
})

export default ListItemSeperator;