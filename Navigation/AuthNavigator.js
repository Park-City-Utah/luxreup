import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator >
      <Stack.Screen name="Welcome" component={ WelcomeScreen } options={{ headerShown: false }} ></Stack.Screen>
      <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown: true }} ></Stack.Screen>
      <Stack.Screen name="Register" component={ RegisterScreen } options={{  headerShown: true }} ></Stack.Screen>
    </Stack.Navigator>
)

export default AuthNavigator;