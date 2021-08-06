import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../Screens/ListingsScreen';
import CardScreen from '../Screens/CardScreen';

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator >
      <Stack.Screen name="Listings" component={ ListingsScreen } options={{ headerShown: true }} ></Stack.Screen>
      <Stack.Screen name="CardScreen" component={ CardScreen } options={{ headerShown: true }} ></Stack.Screen>
    </Stack.Navigator>
)

export default FeedNavigator;