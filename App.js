import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { Text } from 'react-native';

//import WelcomeScreen from './Screens/WelcomeScreen';
//import ViewImageScreen from './Screens/ViewImageScreen';
//import CardScreen from './Screens/CardScreen';
//import MessageScreen from './Screens/MessageScreen';
//import AccountScreen from './Screens/AccountScreen';
//import ListingsScreen from './Screens/ListingsScreen';
//import AppTextInput from './components/AppTextInput';
//import PickerScreen from './screens/PickerScreen';
//import LoginScreen from './Screens/LoginScreen';
//import RegisterScreen from './Screens/RegisterScreen';
import ListingEditScreen from './Screens/ListingEditScreen';
import SubmitButton from './components/Forms/SubmitButton';
import Screen from './Components/Screen';

export default function App() {
  //return <WelcomeScreen/>;
  //return <ViewImageScreen/>;
  //return <CardScreen/>;
  //return <MessageScreen/>;
  //return <AccountScreen/>;
  //return <ListingsScreen/>;
  //return <PickerScreen/>
  //return <LoginScreen/>
  return <RegisterScreen/>
  //return <ListingEditScreen/>

  

}