import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../../components/Buttons/FormButton';
import {AuthContext} from '../../navigation/AuthProvider';

const ProfileScreen = ({navigation}) =>  {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Usuario: {user.uid}</Text>
      <FormButton buttonTitle="Crear" 
        onPress={() => navigation.navigate('Crear')}/>
      <FormButton buttonTitle="Modificar" 
        onPress={() => navigation.navigate('Modificar')}/>
      <FormButton buttonTitle="Eliminar" 
        onPress={() => navigation.navigate('Eliminar')}/>

      <FormButton buttonTitle="Cerrar Sesión" onPress={() => logout()} />
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
