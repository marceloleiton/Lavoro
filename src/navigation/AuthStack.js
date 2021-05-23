import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccountScreen from '../screens/UserList/CreateAccountScreen';
import LoginScreen from '../screens/UserList/LoginScreen';
import OnboardingScreen from '../screens/UserList/OnboardingScreen';

import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const AuthStack = () =>{
    const[isFirstLaunch,setIsFisrtLaunch] = useState(null);
    let routeName;
    useEffect(()=>{
        AsyncStorage.getItem('alreadyLaunched').then((value)=>{
            if(value== null){
                AsyncStorage.setItem('alreadyLaunched','true');
                setIsFisrtLaunch(true);
            } else{
                setIsFisrtLaunch(false);
            }
        });
    },[]);
    if(isFirstLaunch===null){
        return null;
    } else if(isFirstLaunch==true){
        routeName='Onboarding';
    } else {
        routeName='Login';
    }
    return(
        <Stack.Navigator initialRouteName={routeName}>
            <Tab.Screen
                name = "Onboarding" 
                component= {OnboardingScreen}
                options={{ header:()=>null }}
            />
            <Tab.Screen
                name = "Login" 
                component= {LoginScreen}
                options={{  header:()=>null      }}
            />
            <Tab.Screen
                name = "CreateAccount" 
                component= {CreateAccountScreen}
                options={{  header:()=>null      }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack