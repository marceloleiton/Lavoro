/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
import React , {useState} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';

import places from '../../../assets/data/feed';

const SearchResultsMaps = (props) => {

  const [selectedPlaceId,setSelectedPlaceId] = useState({initialState: null});

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: -33.05,
          longitude: -71.6167,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        >
        {places.map(place => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            onPress={()=> setSelectedPlaceId(place.id)}
            job={place.subtitle} 
            coordinate={place.coordinate} 
          />)
          )}
      </MapView>
    </View>
  );
};

export default SearchResultsMaps;
