import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Router from './src/navigation/Router';

import FiltersScreen from './src/screens/Filters';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        {/*<Router />*/}
        <FiltersScreen/>
    </>
  );
};

export default App;
