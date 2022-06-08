import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../Screens/ListingsScreen';
import ListingDetailsScreen from '../Screens/ListingDetailsScreen';
import Routes from './Routes';

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions= {{ headerShown: false}}>
    <Stack.Screen name={Routes.LISTINGS} component={ ListingsScreen } ></Stack.Screen>
    <Stack.Screen name={Routes.LISTING_DETAILS} component={ ListingDetailsScreen } ></Stack.Screen>
  </Stack.Navigator>
)

export default FeedNavigator;