import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import Routes from './Routes';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator >
      <Stack.Screen name={Routes.WELCOME} component={ WelcomeScreen } options={{ headerShown: false }} ></Stack.Screen>
      <Stack.Screen name={Routes.LOGIN} component={ LoginScreen } options={{ headerShown: true }} ></Stack.Screen>
      <Stack.Screen name={Routes.REGISTER} component={ RegisterScreen } options={{  headerShown: true }} ></Stack.Screen>
    </Stack.Navigator>
)

export default AuthNavigator;