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
    return null;
  }

export default Details;
