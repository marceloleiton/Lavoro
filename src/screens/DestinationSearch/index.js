import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import SearchResults from '../../../assets/data/search';
const DestinationSearchScreen = props => {
  {
    /* inputText=value*/
    /* setInputText=function reveal value*/
  }

  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Input component*/}
      <TextInput
        style={styles.textInput}
        placeholder="Buscar ciudad"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List Search Destination*/}
      <FlatList
        data={SearchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
