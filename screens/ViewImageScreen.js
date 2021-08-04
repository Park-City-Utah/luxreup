import React from 'react';
import {StyleSheet, View, Image, SafeAreaView} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.close}>
                <MaterialCommunityIcons name="close" style={styles.Icons} size={30} />
            </View>
            <Image style={styles.picture} source={require("../assets/chair.jpg")}></Image>
            <View style={styles.delete}>
                <MaterialCommunityIcons name="trash-can-outline" style={styles.Icons} size={30}/>   
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.black,
        flexDirection: 'row', //horizontal/vert
        justifyContent: "center", //main
    },
    close:{
        position: "absolute",   //Will allow to position NOT relative to row/column
        top: 40,
        left: 30,

    },
    delete:{
        position: "absolute",
        top: 40,
        right: 30,

    },
    picture: {
        width: "100%",
        height: "100%",
        alignSelf: "center",
        resizeMode: 'contain'
    },
    Icons: {
         color: colors.white,
    },
});

export default ViewImageScreen;