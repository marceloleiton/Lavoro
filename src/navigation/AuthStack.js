import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccountScreen from '../screens/UserList/CreateAccountScreen';
import LoginScreen from '../screens/UserList/LoginScreen';
import OnboardingScreen from '../screens/UserList/OnboardingScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Router from './Router';
import HomeTabNavigation from './HomeTabNavigation';
import ExploreNavigator from './ExploreNavigation';
import DestinationSearchScreen from '../screens/DestinationSearch/index';
import HomeScreen from '../screens/Home/index';
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
        
        <Stack.Navigator >
            <Stack.Screen
                name = "Onboarding" 
                component= {OnboardingScreen}
                options={{ header:()=>null }}
            />
            <Stack.Screen
                name = "Login" 
                component= {LoginScreen}
                options={{  header:()=>null      }}
            />
            <Stack.Screen
                name = "CreateAccount" 
                component= {CreateAccountScreen}
                options={({navigation})=>({
                    title:'',
                    headerStyle:{
                    backgroundColor:'#f9fafd',
                    shadowColor:'#f9fafd',
                    elevation:0,
                    },
                    headerLeft:()=>(
                        <View style={{marginLeft:10}}>
                            <FontAwesome.Button
                            name="long-arrow-left"
                            size={25}
                            backgroundColor="#f9fafd"
                            color="#333"
                            onPress={()=>navigation.navigate('Login')}
                            />
                        </View>
                    ),
                })}
            />       

        </Stack.Navigator>
        //agregar la ruta de router a authstack en la seccion de home o similar para no tener que apilar mas screen(todas) en usa sola seccion 
        //revisar alternativa al uso de " import AsyncStorage from '@react-native-community/async-storage'; " ya que con eso se realiza el almacenamiento temporal de una key en la aplicacion
    );
};

export default AuthStack;