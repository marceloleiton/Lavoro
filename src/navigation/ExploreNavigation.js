/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultTabNavigator from './SearchResultTabNavigator';
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
        component={SearchResultTabNavigator}
        options={{
          title: 'Empleos Disponibles',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
