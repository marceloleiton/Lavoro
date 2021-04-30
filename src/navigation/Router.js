import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';

import HomeTabNavigation from './HomeTabNavigation';
const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{title: 'Buscar por ciudad'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
