import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import FiltersScreen from '../screens/Filters';
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
          options={{title: 'Buscar empleos'}}
        />

        <Stack.Screen
          name={'FiltersScreen'}
          component={FiltersScreen}
          options={{title: 'Filtro categorías'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
