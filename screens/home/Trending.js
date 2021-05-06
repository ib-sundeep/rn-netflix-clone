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
    return null;
  }

export default Tending;
