import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { HintLayout, LoadingLayout, Text } from 'ui/general';
import { useSearchActions, useSearchState } from 'providers/search';
import MediaCard from 'ui/MediaCard';

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

  function renderItem({ item }) {
    return (
      <View style={styles.card}>
        <MediaCard freeWidth data={item} />
      </View>
    );
  }

  if (isLoading) {
    return <LoadingLayout />;
  } else if (error) {
    return (
      <HintLayout
        message="Failed to load results"
        actionLabel="Try again"
        actionFn={fetchResults}
      />
    );
  } else if (results.length > 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.hint}>
          Showing {results.length} results for {searchedKw}
        </Text>
        <FlatList
          style={styles.slides}
          data={results}
          renderItem={renderItem}
          columnWrapperStyle={styles.row}
          numColumns={3}
          keyExtractor={(item) => `${item.media_type}/${item.id}`}
        />
      </View>
    );
  } else if (searchedKw.length === 0) {
    return (
      <HintLayout message="Search for your favorite movies and tv series" />
    );
  } else {
    return <HintLayout message="No results found!" />;
  }
}

export default SearchResults;
