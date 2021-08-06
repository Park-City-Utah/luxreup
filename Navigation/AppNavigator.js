import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from '../Screens/AccountScreen';
import ListingEditScreen from '../Screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Details" component={ FeedNavigator } />
    <Tab.Screen name="Listing Edit" component={ ListingEditScreen } />
    <Tab.Screen name="Account" component={ AccountScreen } />
  </Tab.Navigator>
)

export default AppNavigator;