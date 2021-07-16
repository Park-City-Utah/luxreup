import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Platform} from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={Platform.OS == 'android' ? 1 : 5}
            style={styles.background} 
            source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../assets/logo-red.png")} 
                    style={styles.logo}/>
                <AppText>Re-Up Luxury</AppText>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" color="primary" onPress={() => console.log("Test")}></AppButton>
                <AppButton title="Sign up" color="secondary"></AppButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,                    //Entire screen
        justifyContent: "flex-end", //puts anything added at end
        alignItems: "center"        // secondary axis for image
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center",   //Alight all items in container
        //alignSelf: "center",
    },
    logo: {
        height: 100,
        width: 100,
        //alignSelf: "center"   //Option
    },
    logoText: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"   //Option
    },
    buttonContainer: {
        padding: 10,
        width: '100%'
    },
});

export default WelcomeScreen;