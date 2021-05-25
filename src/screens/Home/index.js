import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        //onPress={() => navigation.navigate('Destination Search')}
        onPress={()=>navigation.navigate("Search")}>
        <Fontisto name="search" size={25} color={'#1259F5'} />
        <Text style={styles.searchButtonText}>Buscar Empleos</Text>

      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/background.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Lavoro</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn({data: 'clicked botton'})}>
          <Text style={styles.buttonText}>Busca oportunidades</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
