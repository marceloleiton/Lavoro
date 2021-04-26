import React from "react";

import {
    View,
    Text, 
    ImageBackground,
    Pressable,
    Dimensions,
    ScrollView,
} from "react-native";

import styles from "./styles"
import Slider from "./Slider"

import Fontisto from "react-native-vector-icons/Fontisto";
const images=[
    'https://image.freepik.com/foto-gratis/carpintero-macho-cortando-tabla-sierra-mano-taller_23-2147944896.jpg',
    'https://image.freepik.com/foto-gratis/carpintero-macho-cortando-tabla-sierra-mano-taller_23-2147944896.jpg',
    'https://image.freepik.com/foto-gratis/carpintero-macho-cortando-tabla-sierra-mano-taller_23-2147944896.jpg',
    'https://image.freepik.com/foto-gratis/carpintero-macho-cortando-tabla-sierra-mano-taller_23-2147944896.jpg'
]

const HomeScreen=(props)=>{

    return (
        <View style={style.container}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} style={styles.image}>

            <Pressable style={styles.searchButton} onPress={() => console.warn( {data: 'clicked botton'})}>
                <Fontisto name="search" size={25} color={"#f15454"} />    
                <Text style={styles.searchButtonText}>Buscar Empleos</Text>

            </Pressable>

                

                <Text style={styles.title}>Lavoro</Text>
            
            <Pressable style={styles.button} onPress={() => console.warn( {data: 'clicked botton'})}>
                <Text style={styles.buttonText}>Busca oportunidades</Text>
            </Pressable>
            
            <Slider images={images}/>

            </ImageBackground>
    </View>
    )
}

export default HomeScreen;

