import React, { useState } from 'react';
import {View, Text, TouchableOpacity,Image, Button, StyleSheet, Touchable} from 'react-native';
import FormInput from '../../components/Buttons/FormInput';
import FormButton from '../../components/Buttons/FormButton';
import SocialButton from '../../components/Buttons/SocialButton';
const LoginScreen=({navigation}) =>{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    return(
        <View style={styles.container}>
            <Image
            source={require('../../../assets/images/Logo.jpg')}
            style={styles.logo}
            />
            <Text style={styles.text}>Lavoro</Text>

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
            <FormButton
            buttonTitle="Ingresar"
            onPress={()=>alert('Ingresar Clicked!')}
            />
            <TouchableOpacity style={styles.forgotButton} onPress={()=>{}}>
                <Text style={styles.navButtonText}>Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <SocialButton
                buttonTitle="Ingresar con Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={()=>{}}
            />

            <SocialButton
                buttonTitle="Ingresar con Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={()=>{}}
            />

            <TouchableOpacity 
            style={styles.forgotButton}
             onPress={()=>navigation.navigate('CreateAccount')}>
                <Text style={styles.navButtonText}>No tienes cuenta? Create una Aquí</Text>
            </TouchableOpacity>
        </View>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 100,
      width: 100,
      resizeMode: 'cover',
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
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });
  