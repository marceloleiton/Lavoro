import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import ViewPager from '@react-native-community/viewpager';
const Tab = createMaterialTopTabNavigator();
const SearchResultTabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1259F5',
        indicatorStyle: {
          backgroundColor: '#1259F5',
        },
      }}>
      <Tab.Screen name={'listado'} component={SearchResults} />
      <Tab.Screen name={'mapa'} component={SearchResults} />
    </Tab.Navigator>
  );
};

export default SearchResultTabNavigator;
