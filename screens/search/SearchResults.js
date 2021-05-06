import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { HintLayout, LoadingLayout, Text } from 'ui/general';
import { useSearchActions, useSearchState } from 'providers/search';
import MediaGrid from 'ui/MediaGrid';

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  hint: {
    margin: 10,
  },
  slides: {
    height: '100%',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  card: {
    padding: 5,
    width: '33.33%',
  },
  row: {
    flexDirection: 'row',
  },
});

function SearchResults() {
  const { isLoading, error, results, searchedKw } = useSearchState();
  const { fetchResults } = useSearchActions();

  return null;
}

export default SearchResults;
