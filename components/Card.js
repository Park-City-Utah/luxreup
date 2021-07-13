import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

import AppText from './AppText';
import colors from '../config/Colors';

function Card({ title, subTitle, image}) {
    return (
       <View style={styles.card}>
            <Image source={image} style={styles.cardImage}/> 
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    card: {
        //marginTop: "10%",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 10,
        flex: 1,
        overflow: 'hidden'//adhere to container radius, no overflow
    },
    cardImage: {
        height: 120,
        width: "100%"
    },
    detailsContainer: {
        padding: 10,
        
    },
    title: {
        marginBottom: 8,
        color: colors.black,
    },
    subTitle: {
        color: colors.black,
        fontWeight: 'bold',
        color: colors.secondary,
        fontSize: 20,
        marginBottom: 8
    }
})

export default Card;