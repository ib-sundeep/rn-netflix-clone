import React from 'react';
import { StyleSheet, View } from 'react-native';

import MediaCard from 'ui/MediaCard';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    marginBottom: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    padding: 5,
    width: '33.33%',
  },
  row: {
    flexDirection: 'row',
  },
});

function MediaGrid({ list, ...remainingProps }) {
  return (
    <View style={styles.root}>
      {list.map((item) => (
        <View key={`${item.media_type}/${item.id}`} style={styles.card}>
          <MediaCard freeWidth data={item} />
        </View>
      ))}
    </View>
  );
}

export default MediaGrid;
