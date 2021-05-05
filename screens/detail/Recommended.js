import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from 'ui/general';
import { useDetailsState } from 'providers/details';
import MediaGrid from 'ui/MediaGrid';

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
});

function Recommended() {
  const { data } = useDetailsState();
  if (
    data.recommendations &&
    data.recommendations.results &&
    data.recommendations.results.length > 0
  ) {
    return (
      <View style={styles.root}>
        <Text style={styles.title} size="large" weight="bold">
          More Like this
        </Text>
        <MediaGrid list={data.recommendations.results} />
      </View>
    );
  } else {
    return null;
  }
}

export default Recommended;
