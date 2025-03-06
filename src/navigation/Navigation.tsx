import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {RootStackParamList} from 'types/navigation/Navigation.ts';
import LoginScreen from '../screens/LoginScreen.tsx';
import SplashScreen from '../screens/SplashScreen.tsx';
import HomeScreen from '../screens/HomeScreen.tsx';


const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'HomeScreen'}  component={HomeScreen} />
        <Stack.Screen name={'Login'}  component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigation;
