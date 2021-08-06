import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "../Components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../Components/Forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen( {navigation} ) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logoSmall.png")} />
      </View>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
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
          <SubmitButton title="Login" color="primary" onSubmit={() => navigation.navigate("ListingsScreen")}/>
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

export default LoginScreen;