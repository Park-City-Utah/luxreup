import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ViewImageScreen from './Screens/ViewImageScreen';
import CardScreen from './Screens/CardScreen';
import MessageScreen from './Screens/MessageScreen';
import AccountScreen from './Screens/AccountScreen';
import ListingsScreen from './Screens/ListingsScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ListingEditScreen from './Screens/ListingEditScreen';

const Stack = createStackNavigator();

function App() {
  //return <WelcomeScreen/>;
  //return <ViewImageScreen/>;
  //return <CardScreen/>;
  //return <MessageScreen/>;
  //return <AccountScreen/>;
  //return <ListingsScreen/>;
  //return <LoginScreen/>
  //return <RegisterScreen/>
  //return <ListingEditScreen/>

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component={ WelcomeScreen }
        options={{ 
          //headerStyle: {backgroundColor: colors.primary}
          headerTransparent: true,
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown: false }} ></Stack.Screen>
      <Stack.Screen name="Register" component={ RegisterScreen }options={{ headerShown: false }} ></Stack.Screen>
      <Stack.Screen name="Listing" component={ ListingsScreen }></Stack.Screen>
      <Stack.Screen name="Listing Edit" component={ ListingEditScreen }></Stack.Screen>
      <Stack.Screen name="Message" component={ MessageScreen }></Stack.Screen>
      <Stack.Screen name="Card" component={ CardScreen }></Stack.Screen>
      <Stack.Screen name="View Image" component={ ViewImageScreen }></Stack.Screen>
      <Stack.Screen name="Account" component={ AccountScreen }></Stack.Screen>
    </Stack.Navigator>
</NavigationContainer>
  );

      }

export default App;