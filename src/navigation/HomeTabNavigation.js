import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SearchResultsMaps from '../screens/SearchResultsMap';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DestinationSearchScreen from '../screens/DestinationSearch';
import FiltersScreen from '../screens/Filters';
import ExploreNavigator from '../navigation/ExploreNavigation';
const Tab = createBottomTabNavigator();

const HomeTabNavigation = props => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: '#1259F5'}}>
      <Tab.Screen
        name={'inicio'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}: {color: string}) => (
            <Fontisto name="home" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'buscar'}
        component={SearchResultsMaps}
        options={{
          tabBarIcon: ({color}: {color: string}) => (
            <Fontisto name="search" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Perfil'}
        component={FiltersScreen}
        options={{
          tabBarIcon: ({color}: {color: string}) => (
            <Feather name="user" size={35} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
