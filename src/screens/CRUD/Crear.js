import React from 'react';
import {View, Text,TouchableOpacity,Image,StyleSheet,Alert} from 'react-native';
import FormInput from '../../components/Buttons/FormInput';
import FormButton from '../../components/Buttons/FormButton';

const CrearScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/Logo.jpg')}
                style={styles.logo}/>
            <Text style={styles.text}>Lavoro</Text>

        
        <FormInput
        placeholderText="Trabajo"
        />
        <FormInput
        placeholderText="Ubicacion"
        />
        <FormInput
        placeholderText="Descripcion del trabajo"
        />
        <FormInput
        placeholderText="Remuneracion diaria"
        />
        <FormButton
        buttonTitle="Registar"
        onPress={() => 
        Alert.alert('Funcion aun no implementada','Porfavor vuelva pronto',[
          {text: 'Aceptar', onPress:()=>console.log('alert closed')}
        ])
        }
        />

        </View>
    );
    };

export default CrearScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
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
