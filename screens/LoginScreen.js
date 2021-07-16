import React from 'react';
import {StyleSheet, Image} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import AppFormField from '../components/AppFormField';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
}); //outside so doesnt get defined each time

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
                validationSchema={validationSchema}
            >
                { ( {handleChange, handleSubmit, errors, setFieldTouched, touched} ) => (//bracket allows multuple lines
                    <>
                        <AppFormField
                            name="email"
                            icon="email"
                            placeholder="Email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyBoardType="email-address"
                            textContentType="emailAddress"  //IOS, autofill from keychain
                            //onBlur={() => setFieldTouched("email")}//Moved to component AppFormField
                            //onChangeText={handleChange("email")}
                        />
                        <AppFormField
                            name="password"
                            icon="lock"
                            placeholder="Password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry     //Default true 
                            //onBlur={() => setFieldTouched("password")}
                            //onChangeText={handleChange("password")}
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