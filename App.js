import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';

const post1 = feed[0];
const post2 = feed[1];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>  
       {/* <HomeScreen/>*/}
         {/*<Post post={post1}/>*/}
        {/* <Post post={post2}/>*/}
       {/* <SearchResultsScreen />*/}
       <DestinationSearchScreen/>
      </SafeAreaView>
    </>
  );
};

export default App;
