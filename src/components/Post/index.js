import React from 'react';
import {View, Text,Image} from 'react-native';
import styles from './styles';

const Post = (props) => { 

    const post = props.post;
    /*console.log(props);*/
    return (
        <View style={styles.container}> 

            {/* Portada*/}
            <Image style={styles.image} source={{uri:post.image}}/>

            {/* Subtitulo*/}
            <Text style={styles.subtitle}>{post.subtitle}</Text>
        
            {/* Descripción*/}
            <Text style={styles.description} numberOfLines={2}
            >{post.description}</Text>

            {/* Payment*/}
            <Text style={styles.prices}>
                <Text style={styles.price}>${post.price}</Text> / Día
            </Text>

            <Text style={styles.totalPrice}>${post.totalPrice} / Mes</Text>
        </View>
    );
};
export default Post;
