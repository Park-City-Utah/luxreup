import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import IconComponent from './IconComponent';
import AppText from './AppText';
import colors from '../config/colors';

function CategoryPickerItem({ item, onPress }) {    //item replaced label
    return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <IconComponent 
                    backgroundColor={item.backgroundColor} 
                    name={item.icon} 
                    size={50}
                />
                <AppText style={styles.label}>{item.label}</AppText>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15, 
        alignItems: 'center',
        width: '33%',
        textAlign: 'center',
    },
    label: {
        marginTop: 5, 
        color: colors.black,
        fontSize: 18

    }
})

export default CategoryPickerItem;