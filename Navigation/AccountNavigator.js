import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../Screens/AccountScreen';
import MessageScreen from '../Screens/MessageScreen';
import ListingsScreen from '../Screens/ListingsScreen';

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="AccountScreen" component={ AccountScreen } options={{ headerShown: false }} ></Stack.Screen>
    <Stack.Screen name="ListingsScreen" component={ ListingsScreen } options={{ headerShown: false  }} ></Stack.Screen>
    <Stack.Screen name="MessageScreen" component={ MessageScreen } options={{ headerShown: false  }} ></Stack.Screen>
  </Stack.Navigator>
)

export default AccountNavigator;