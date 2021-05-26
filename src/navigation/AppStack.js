import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/UserList/ProfileScreen';

const Stack = createStackNavigator();

const AppStack= ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={ProfileScreen}/>
    </Stack.Navigator>
  );
}

export default AppStack;