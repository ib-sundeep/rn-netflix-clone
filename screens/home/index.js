import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Button, IconButton } from 'ui/general';
import Header from './Header';
import styleVars from 'constants/styles';

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  content: {},
  banner: {
    position: 'relative',
    width: '100%',
    paddingTop: '150%',
  },
  bannerContent: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bannerActions: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: styleVars.headerHeight,
  },
  mainAction: {
    marginHorizontal: 0,
  },
});

function HomeScreen() {
  return (
    <View style={styles.root}>
      <Header />
      <ScrollView style={styles.content}>
        <ImageBackground
          style={styles.banner}
          source={{
            uri:
              'https://image.tmdb.org/t/p/w500/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg',
          }}
          resizeMode="contain"
        >
          <View style={styles.bannerContent}>
            <LinearGradient
              style={styles.bannerActions}
              colors={[
                styleVars.gradientDarkColor,
                styleVars.gradientLightColor,
              ]}
            >
              <IconButton icon="plus" label="My List" />
              <Button icon="play" style={styles.mainAction} label="Play" />
              <IconButton icon="info" label="Info" />
            </LinearGradient>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
