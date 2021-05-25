import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const ProfileScreen=({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Cerrar Sesion</Text>
            <Button
            title="Click Here"
            onPress={()=>navigation.navigate("Login")}
            />
        </View>
    );
};
export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});