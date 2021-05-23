import React, { useState } from 'react';
import {View, Text, TouchableOpacity,Image, Button, StyleSheet, Touchable} from 'react-native';
import FormInput from '../../components/Buttons/FormInput';
import FormButton from '../../components/Buttons/FormButton';
import SocialButton from '../../components/Buttons/SocialButton';

const CreateAccountScreen=({navigation}) =>{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[confirmpassword,setConfirmPassword]=useState();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Crear Cuenta</Text>

            <FormInput
            labelValue={email}
            onChangeText={(userEmail)=>setEmail(userEmail)}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autroCorrect={false}
            />
            <FormInput
            labelValue={password}
            onChangeText={(userPassword)=>setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
            />
            <FormInput
            labelValue={confirmpassword}
            onChangeText={(userPassword)=>setConfirmPassword(userPassword)}
            placeholderText="Confirm Password"
            iconType="lock"
            secureTextEntry={true}
            />
            <FormButton
            buttonTitle="Crear Cuenta"
            onPress={()=>alert('Crear Cuenta Clicked!')}
            />

            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>            Al registrarse, aceptas nuestros</Text>
              <TouchableOpacity>
              <Text style={[styles.color_textPrivate,{color:'#e88832'}]}>terminos de servicio y Politicas de Privacidad</Text>
              </TouchableOpacity>
            </View>


            <SocialButton
                buttonTitle="Crear con Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={()=>{}}
            />

            <SocialButton
                buttonTitle="Crear con Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={()=>{}}
            />

            <TouchableOpacity 
            style={styles.forgotButton}
             onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>ya tienes cuenta? Ingresa Aquí</Text>
            </TouchableOpacity>
        </View>
    );
};
export default CreateAccountScreen;


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });