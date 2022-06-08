import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingEditScreen from '../Screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import Routes from './Routes';

const Tab = createBottomTabNavigator( );
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={ FeedNavigator } options={{ headerShown: false, tabBarIcon: ( { size, color } ) => <MaterialCommunityIcons name='home' size={size} color={color}/> }} />
    
    <Tab.Screen
      name="ListingEditScreen"
      component={ListingEditScreen}
      options={({ navigation }) => ({     //Turned to a function rather than object, get navigation/route with
        headerShown: false,
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(Routes.LISTING_EDIT)}
          />
        ),
       /* tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),*/
      })}
    />
    
    <Tab.Screen name="Account" component={ AccountNavigator } options={{ headerShown: false, tabBarIcon: ( { size, color } ) => <MaterialCommunityIcons name='account' size={size} color={color}/> }}  />
  </Tab.Navigator>
)

export default AppNavigator;