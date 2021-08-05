import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Platform} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AppText from '../Components/AppText';
import AppButton from '../Components/AppButton';
import colors from '../config/colors';

function WelcomeScreen( {navigation} ) {
    return (
        <ImageBackground blurRadius={Platform.OS == 'android' ? 0 : 0}
            style={styles.background} 
            source={require("../assets/background-porsche.jpeg")}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../assets/poweredByLogo.png")} 
                    style={styles.logo}
                    />
                <AppText style={styles.logoText}></AppText>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" color="primary" onPress={() => navigation.navigate("Login")}></AppButton>
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")}></AppButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,                    //Entire screen
        //alignItems: "center"        // secondary axis for image
    },
    logoContainer: {
        alignItems: "center",   //Alight all items in container
        width: '100%',
        height: '30%',
        justifyContent: 'center',
    },
    logo: {
        //top: '5%',
        width: '50%',
        resizeMode: 'contain',
       // alignSelf: "center",
        marginTop: 5,
        //marginBottom: 20,
    },
    logoText: {
        fontSize: 40,
        fontWeight: "bold",
        //alignSelf: "center" ,  //Option
        color: colors.primary,

    },
    buttonContainer: {
        padding: 10,
        width: '100%',
        height: '70%',
        justifyContent: 'flex-end',
        bottom: 10,
    },
});

export default WelcomeScreen;