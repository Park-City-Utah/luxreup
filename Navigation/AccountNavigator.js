import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../Screens/AccountScreen';
import MessageScreen from '../Screens/MessageScreen';
import ListingsScreen from '../Screens/ListingsScreen';
import Routes from './Routes';

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator screenOptions= {{ headerShown: false}}>
    <Stack.Screen name={Routes.ACCOUNT} component={ AccountScreen }  ></Stack.Screen>
    <Stack.Screen name={Routes.LISTINGS} component={ ListingsScreen }  ></Stack.Screen>
    <Stack.Screen name={Routes.MESSAGES} component={ MessageScreen }  ></Stack.Screen>
  </Stack.Navigator>
)

export default AccountNavigator;