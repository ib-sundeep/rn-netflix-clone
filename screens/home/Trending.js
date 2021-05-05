import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { HintLayout, LoadingLayout, Text } from 'ui/general';
import { useTrendingState } from 'providers/trending';
import MediaCard from 'ui/MediaCard';

const styles = StyleSheet.create({
  root: {
    marginVertical: 15,
  },
  title: {
    marginBottom: 10,
    marginLeft: 10,
  },
  slides: {
    paddingHorizontal: 5,
  },
  card: {
    marginHorizontal: 5,
  },
});

function Tending() {
  const { trending, isLoading, error } = useTrendingState();

  if (isLoading) {
    return <LoadingLayout />;
  } else if (error) {
    return <HintLayout message="Failed to load" />;
  } else {
    return (
      <View style={styles.root}>
        <Text style={styles.title} size="large" weight="bold">
          Trending
        </Text>
        <ScrollView style={styles.slides} horizontal>
          {trending.map((item) => (
            <MediaCard
              key={`${item.media_type}/${item.id}`}
              style={styles.card}
              data={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Tending;
