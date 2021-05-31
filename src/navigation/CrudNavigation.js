import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View,Alert} from 'react-native';
import CrearScreen from '../screens/CRUD/Crear';
import ModificarScreen from '../screens/CRUD/Modificar';
import EliminarScreen from '../screens/CRUD/Eliminar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../screens/UserList/ProfileScreen';

import SearchResultTabNavigator from './SearchResultTabNavigator';
const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
          name="Crear"
          component={CrearScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Profile')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name={'Modificar'}
          component={ModificarScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Profile')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name={'Eliminar'}
          component={EliminarScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Profile')}
                />
              </View>
            ),
          })}
        />
    </Stack.Navigator>
  );
};

export default Router;
