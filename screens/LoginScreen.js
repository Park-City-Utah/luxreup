import React, { useState } from 'react';
import {StyleSheet, Image, View} from 'react-native';

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import colors from '../config/Colors';

function LoginScreen(props) {
const [email, setEmail] = useState();
const [password, setPassword] = useState();

    return (
        <Screen>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}/>
            <View style={styles.input}>
                <AppTextInput
                    icon="email"
                    placeholder="Email"
                    autoCapitalization="none"
                    autoCorrect={false}
                    keyBoardType="email-address"
                    textContentType="emailAddress"  //IOS, autofill from keychain
                    onChangeText={text => setEmail(text)}
                />
                <AppTextInput
                    icon="lock"
                    placeholder="Password"
                    autoCapitalization="none"
                    autoCorrect={false}
                    secureTextEntry     //Default true 
                    onChangeText={text => setPassword(text)}
                />
                <AppButton
                    style={styles.login}
                    title="Login"
                    color={colors.black}
                    onPress={() => console.log(email, password)}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 100, 
        height: 100, 
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    },
    input: {
        
    },
    login: {

    }
})

export default LoginScreen;