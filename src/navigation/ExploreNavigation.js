/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsScreen}
        options={{
          title: 'Empleos Disponibles',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
