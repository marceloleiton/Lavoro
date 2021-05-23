import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
import LoginScreen from '../screens/UserList/LoginScreen'
import CreateAccountScreen from '../screens/UserList/CreateAccountScreen'
import OnboardingScreen from '../screens/UserList/OnboardingScreen'
import AuthStack from './AuthStack'
import { View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

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
        name = "Onboarding" 
        component= {OnboardingScreen}
        options={{
          tabBarIcon: ({color}: {color: string}) => (
            <Feather name="user" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name = "Login" 
        component= {LoginScreen}
        options={{
          tabBarIcon: ({color}: {color: string}) => (
            <Feather name="user" size={35} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name = "CreateAccount" 
        component= {CreateAccountScreen}
        options={({navigation}) => ({
          title: 'Create',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
            tabBarIcon: ({color}: {color: string}) => (
            <Feather name="user" size={35} color={color} />
          ),
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button 
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
          tabBarIcon: ({color}: {color: string}) => (
            <Feather name="user" size={35} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
