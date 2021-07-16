import React from 'react';
import {StyleSheet, Image} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm } from '../components/Forms'

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
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            ></AppForm>
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