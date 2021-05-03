import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import SuggestionRow from './SuggestionRow';
import SearchResults from '../../../assets/data/search';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = props => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Input component*/}

      <GooglePlacesAutocomplete
        placeholder="Buscar"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('FiltersScreen');
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyBs06EkRd01BNnDFCfZ2BUZOFKgr9x3Fd4',
          language: 'es',
          type: '(cities)',
          components: 'country:cl',
        }}
        suppressDefaultStyles
        renderRow={(item: GooglePlaceData) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
