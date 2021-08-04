import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen from './Components/Screen';

import WelcomeScreen from './Screens/WelcomeScreen';
import ViewImageScreen from './Screens/ViewImageScreen';
import CardScreen from './Screens/CardScreen';
import MessageScreen from './Screens/MessageScreen';
import AccountScreen from './Screens/AccountScreen';
import ListingsScreen from './Screens/ListingsScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ListingEditScreen from './Screens/ListingEditScreen';

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
    </Screen>
);

const TweetDetails = () => (
  <Screen>
  <Text>Tweet Details</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
    <Stack.Screen name="Tweet Detail" component={TweetDetails}></Stack.Screen>
  </Stack.Navigator>
)

export default function App() {
  //return <WelcomeScreen/>;
  //return <ViewImageScreen/>;
  //return <CardScreen/>;
  //return <MessageScreen/>;
  //return <AccountScreen/>;
  //return <ListingsScreen/>;
  //return <LoginScreen/>
  //return <RegisterScreen/>
  return <ListingEditScreen/>

}