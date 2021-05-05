import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SearchProvider } from 'providers/search';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
});

function SearchScreen() {
  return (
    <SearchProvider>
      <View style={styles.root}>
        <SearchInput />
        <SearchResults />
      </View>
    </SearchProvider>
  );
}

export default SearchScreen;
