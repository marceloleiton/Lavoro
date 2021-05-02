import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import SearchResults from '../../../assets/data/search';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = props => {
  {
    /* inputText=value*/
    /* setInputText=function reveal value*/
  }

  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Input component*/}
      <TextInput
        style={styles.textInput}
        placeholder="Busqueda por ciudad"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List Search Destination*/}
      <FlatList
        data={SearchResults}
        renderItem={({item}) => (
          <Pressable onPress={()=> navigation.navigate('Filter')} style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
