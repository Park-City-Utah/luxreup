import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import { Formik } from 'formik';

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
//const [email, setEmail] = useState();//Formik tracks state
//const [password, setPassword] = useState(); Formik, no longer need

    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}/>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
            >
                { ( {handleChange, handleSubmit} ) => (//bracket allows multuple lines
                    <>
                        <AppTextInput
                            icon="email"
                            placeholder="Email"
                            autoCapitalization="none"
                            autoCorrect={false}
                            keyBoardType="email-address"
                            textContentType="emailAddress"  //IOS, autofill from keychain
                            onChangeText={handleChange("email")}
                        />
                        <AppTextInput
                            icon="lock"
                            placeholder="Password"
                            autoCapitalization="none"
                            autoCorrect={false}
                            secureTextEntry     //Default true 
                            onChangeText={handleChange("password")}
                        />
                        <AppButton
                            title="Login"
                            color="primary"
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
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
    container: {
        padding: 10,
    },
});

export default LoginScreen;