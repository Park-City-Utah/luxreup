import React from 'react';
import { StyleSheet, Image, View} from 'react-native';
import * as Yup from 'yup';

import Screen from '../Components/Screen';
import AppForm from '../Components/Forms/AppForm';
import AppFormField from '../Components/Forms/AppFormField';
import SubmitButton from '../Components/Forms/SubmitButton';
import colors from '../config/colors';
import Routes from '../Navigation/Routes';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
}); //outside so doesnt get defined each time

function RegisterScreen( {navigation}) {
    return (
      <Screen style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logoSmall.png")} />
        </View>
        <View style={styles.formContainer}>
          <AppForm
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="name"
              placeholder="Name"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Register" color="secondary" onSubmit={() => navigation.navigate(Routes.LISTINGS)} />
          </AppForm>
        </View>
      </Screen>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '100%'
    },
    logoContainer: {
      height: '25%',
      width: '100%',
      //backgroundColor: 'red',
      justifyContent: 'center'
    },
    formContainer: {
      justifyContent: 'flex-end',
      flex: 1,
      padding: 20
    },
    logo: {
      position: 'absolute',
      marginTop: 15,
      width: 200,
      height: 100,
      resizeMode: 'contain',
      alignSelf: "center",
      marginBottom: 5,
    },
  });

export default RegisterScreen;