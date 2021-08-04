import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Platform} from 'react-native';

import AppText from '../Components/AppText';
import AppButton from '../Components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={Platform.OS == 'android' ? 0 : 0}
            style={styles.background} 
            source={require("../assets/background-porsche.jpeg")}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../assets/logo.png")} 
                    style={styles.logo}/>
                <AppText style={styles.logoText} ></AppText>
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
        width: 300,
        height: 120,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    logoText: {
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center"   //Option
    },
    buttonContainer: {
        padding: 10,
        width: '75%'
    },
});

export default WelcomeScreen;