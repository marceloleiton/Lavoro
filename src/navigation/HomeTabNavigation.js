import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DestinationSearchScreen from '../screens/DestinationSearch';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = props => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: '#1259F5'}}>
      <Tab.Screen
        name={'inicio'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}: {color: string}) => (
            <Fontisto name="home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'buscar'}
        component={DestinationSearchScreen}
        options={{
          tabBarIcon: ({color}: {color: string}) => (
            <Fontisto name="search" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
