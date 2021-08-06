import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../Screens/ListingsScreen';
import ListingDetailsScreen from '../Screens/ListingDetailsScreen';

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator >
      <Stack.Screen name="Listings" component={ ListingsScreen } options={{ headerShown: false }} ></Stack.Screen>
      <Stack.Screen name="ListingDetailsScreen" component={ ListingDetailsScreen } options={{ headerShown: false  }} ></Stack.Screen>
    </Stack.Navigator>
)

export default FeedNavigator;