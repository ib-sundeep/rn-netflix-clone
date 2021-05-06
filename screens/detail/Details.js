import React from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';

import { Button, HintLayout, LoadingLayout, Text } from 'ui/general';
import { useDetailsState } from 'providers/details';
import Heading from './Heading';
import Recommended from './Recommended';
import VideoPlayer from './VideoPlayer';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'stretch',
  },
  action: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  overview: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  details: {
    flex: 1,
  },
});

function Details() {
  const { isLoading, error, data } = useDetailsState();

  if (isLoading) {
    return <LoadingLayout />;
  } else if (error) {
    return <HintLayout message="Failed to load details!" />;
  } else if (data) {
    return (
      <View style={styles.root}>
        <VideoPlayer />
        <ScrollView style={styles.details}>
          <Heading />
          {Boolean(data.homepage) && (
            <Button
              onPress={() => Linking.openURL(data.homepage)}
              style={styles.action}
              icon="external-link"
              label="Visit website"
            />
          )}
          {Boolean(data.overview) && (
            <Text style={styles.overview} size="small">
              {data.overview}
            </Text>
          )}
          <Recommended />
        </ScrollView>
      </View>
    );
  } else {
    return null;
  }
}

export default Details;
