import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMarker = props => {
  const {coordinate, job, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          padding: 4,
          borderRadius: 20,
          borderColor: 'black',
          borderWidth: 2,
        }}>
        <Text
          style={{fontWeight: 'bold', color: isSelected ? 'white' : 'black'}}>
          {job}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
