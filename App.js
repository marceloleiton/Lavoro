import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
        {/*<Post post={post1}/>*/}
        {/* <Post post={post2}/>*/}
        {/* <SearchResultsScreen />*/}
        {/* <DestinationSearchScreen />*/}
        {/* 2:14:30*/}
        {/* actual navigation 2:44:30*/}
      </SafeAreaView>
    </>
  );
};

export default App;
