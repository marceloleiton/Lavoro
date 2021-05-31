import React, {createContext, useState} from 'react';
import {View, Text,Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          if(email==null || password==null || email==''||password==''){
            Alert.alert('Campos vacios','porfavor asegurese de rellenar todos los campos',[
              {text: 'Aceptar', onPress:()=>console.log('alert closed')}]);
            }else{ 
          try{
            await auth().signInWithEmailAndPassword(email, password);
          }catch (e) {
            console.log(e);
            Alert.alert(e.code.split("/")[1],'Porfavor vuelva a intentar',[
              {text: 'Aceptar', onPress:()=>console.log('alert closed')}]);
          }
        }},
        register: async (email, password) => {
          try {

            if(email==null || password==null || email==''||password==''){
              Alert.alert('Campos vacios','porfavor asegurese de rellenar todos los campos',[
                {text: 'Aceptar', onPress:()=>console.log('alert closed')}]);
              }else{    
              await auth().createUserWithEmailAndPassword(email, password);}
          }catch (e) {
            console.log(e);
              if(e.code.split("/")[1]=="weak-password"){
                Alert.alert('contraseña de 6 caracteres minimo','porfavor vuelva a intentar',[
                  {text: 'Aceptar', onPress:()=>console.log('alert closed')}]);
              }else{
                Alert.alert(e.code.split("/")[1],'Porfavor vuelva a intentar',[
                  {text: 'Aceptar', onPress:()=>console.log('alert closed')}]);
              }
            }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
