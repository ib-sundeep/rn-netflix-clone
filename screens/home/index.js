import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { TrendingProvider } from 'providers/trending';
import Banner from './Banner';
import Header from './Header';
import Trending from './Trending';

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  content: {},
});

function HomeScreen() {
  return (
      <View style={styles.root}>
        <Header />
        <ScrollView style={styles.content}>
          <Banner />
        </ScrollView>
      </View>
  );
}

export default HomeScreen;
