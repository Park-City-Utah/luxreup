import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import NavigationTheme from './Navigation/NavigationTheme';
import AppNavigator from './Navigation/AppNavigator';
import AuthNavigator from './Navigation/AuthNavigator';

function App() {

  return (
  <NavigationContainer theme={NavigationTheme}>
    <AuthNavigator/>
  </NavigationContainer>
  );
 }

export default App;

/*    
<Tab.Screen name="Listing" component={ ListingsScreen } />
    <Tab.Screen name="Listing Edit" component={ ListingEditScreen } />
    <Tab.Screen name="Message" component={ MessageScreen } />
    <Tab.Screen name="Card" component={ CardScreen } />
    <Tab.Screen name="View Image" component={ ViewImageScreen } />
    <Tab.Screen name="Account" component={ AccountScreen } />
    

    const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={ WelcomeScreen } options={{ headerShown: false }} ></Stack.Screen>
      <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown: false }} ></Stack.Screen>
      <Stack.Screen name="Register" component={ RegisterScreen } options={{  headerShown: false }} ></Stack.Screen>
      <Stack.Screen name="Listing" component={ ListingsScreen }></Stack.Screen>
      <Stack.Screen name="Listing Edit" component={ ListingEditScreen }></Stack.Screen>
      <Stack.Screen name="Message" component={ MessageScreen }></Stack.Screen>
      <Stack.Screen name="Card" component={ CardScreen }></Stack.Screen>
      <Stack.Screen name="View Image" component={ ViewImageScreen }></Stack.Screen>
      <Stack.Screen name="Account" component={ AccountScreen }></Stack.Screen>
    </Stack.Navigator>
)




const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Welcome" tabBarOptions={{
      //activeBackgroundColor:
      //activeTintColor:
      inactiveBackgroundColor: '#eee'
  }}>
    <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ tabBarIcon: ( { size, color } ) => <MaterialCommunityIcons name='home' size={size} color={color}/> }}/>
    <Tab.Screen name="Login" component={ LoginScreen } options={{ tabBarIcon: ( { size, color } ) => <MaterialCommunityIcons name='login' size={size} color={color}/> }} />
    <Tab.Screen name="Register" component={ RegisterScreen } options={{ tabBarIcon: ( { size, color } ) => <MaterialCommunityIcons name='login' size={size} color={color}/> }}/>
    <Tab.Screen name="Listing" component={ ListingsScreen } />
    <Tab.Screen name="Listing Edit" component={ ListingEditScreen } />
    <Tab.Screen name="Message" component={ MessageScreen } />
    <Tab.Screen name="Card" component={ CardScreen } />
    <Tab.Screen name="View Image" component={ ViewImageScreen } />
    <Tab.Screen name="Account" component={ AccountScreen } />
  </Tab.Navigator>
)


  //return <WelcomeScreen/>;
  //return <ViewImageScreen/>;
  //return <CardScreen/>;
  //return <MessageScreen/>;
  //return <AccountScreen/>;
  //return <ListingsScreen/>;
  //return <LoginScreen/>
  //return <RegisterScreen/>
  //return <ListingEditScreen/>

      */