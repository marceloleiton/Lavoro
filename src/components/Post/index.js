import React from 'react';
import {View, Text,Image} from 'react-native';
import styles from './styles';

const Post = (props) => { 
    return (
        <View style={styles.container}> 

            {/* Portada*/}
            <Image style={styles.image} source={{uri: 'https://image.freepik.com/foto-gratis/carpintero-macho-cortando-tabla-sierra-mano-taller_23-2147944896.jpg'}}/>

            {/* Subtitulo*/}
            <Text style={styles.subtitle}>Carpintero</Text>
        
            {/* Descripción*/}
            <Text style={styles.description} numberOfLines={2}
            >Se necesita a un Carpintero para atender a clientes que necesitan de su servicio. El pago es por cada cliente que te contrata.Necesidades del cliente que requiere tus servicios:¿Para cuál de los siguientes objetos necesitas el trabajo de carpintería?: Puertas ¿De qué tipo de propiedad se trata?: Residencial ¿Qué servicios de carpintería necesitas?: Nueva construcción personalizada</Text>

            {/* Payment*/}
            <Text style={styles.prices}>
                <Text style={styles.price}>$20.000</Text> / Día
            </Text>

            <Text style={styles.totalPrice}>$400.000 / Mes</Text>
        </View>
    );
};
export default Post;