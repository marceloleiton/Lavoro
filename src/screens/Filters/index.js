/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const FiltersScreen = props => {
  const [ContrucionFilter, setContrucionFilter] = useState('no');
  const [PanaderiaFilter, setPanaderiaFilter] = useState('no');
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Contrucción</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => setContrucionFilter('no')}
              style={styles.button}>
              <Text style={{fontSize: 17}}>no</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20}}>{ContrucionFilter}</Text>
            <Pressable
              onPress={() => setContrucionFilter('si')}
              style={styles.button}>
              <Text style={{fontSize: 17}}>si</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Panaderías</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => setPanaderiaFilter('no')}
              style={styles.button}>
              <Text style={{fontSize: 17}}>no</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20}}>{PanaderiaFilter}</Text>
            <Pressable
              onPress={() => setPanaderiaFilter('si')}
              style={styles.button}>
              <Text style={{fontSize: 17}}>si</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate('Home',{
            screen: 'inicio',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: '#1259F5',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 19, fontWeight: 'bold', color: 'white'}}>
          Buscar
        </Text>
      </Pressable>
    </View>
  );
};
export default FiltersScreen;
