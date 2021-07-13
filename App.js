import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { Text } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import CardScreen from './screens/CardScreen';
import MessageScreen from './screens/MessageScreen';
import AccountScreen from './screens/AccountScreen';
import ListingsScreen from './screens/ListingsScreen';
import AppTextInput from './components/AppTextInput';
import PickerScreen from './screens/PickerScreen';
import LoginScreen from './screens/LoginScreen';



export default function App() {
  //return <WelcomeScreen/>;
  //return <ViewImageScreen/>;
  //return <CardScreen/>;
  //return <MessageScreen/>;
  //return <AccountScreen/>;
  //return <ListingsScreen/>;
  //return <PickerScreen/>
  return <LoginScreen/>

  /*const [firstName, setFirstName] = useState(''); //empty so not undefined

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput 
      clearButtonMode="always"  //iPhone only
      //keyboardType="numberic"
      //secureTextEntry         //If not indicated, true
      onChangeText= {text => setFirstName(text)}
      placeholder="First Name"
      style={{
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
      }}>

      </TextInput>
    </Screen>
    */

/*?*return (
      <AppTextInput></AppTextInput>
  );*/
}