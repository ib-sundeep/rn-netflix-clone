import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Button, IconButton, LoadingLayout } from 'ui/general';
import { generateImageUrl, ImageSizes } from 'utils/tmdb';
import { useTrendingState } from 'providers/trending';
import styleVars, { getPaddingFromAspectRatio } from 'utils/styles';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    width: '100%',
    paddingTop: getPaddingFromAspectRatio(styleVars.posterAspectRatio),
  },
  content: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    bottom: 0,
    left: 0,
    width: '100%',
    position: 'absolute',
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

function Banner() {
  const { trending, isLoading, error } = useTrendingState();

  if (isLoading) {
    return (
      <View style={styles.root}>
        <View style={styles.content}>
          <LoadingLayout />
        </View>
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.root}>
        <View style={styles.content}>
          <HintLayout message="Failed to load!" />
        </View>
      </View>
    );
  } else if (trending.length > 0) {
    const mostTrending = trending[0];
    return (
      <ImageBackground
        style={styles.root}
        source={{
          uri: generateImageUrl(mostTrending.poster_path, ImageSizes.poster),
        }}
        resizeMode="cover"
      >
        <LinearGradient
          style={styles.actions}
          colors={[styleVars.gradientLightColor, styleVars.gradientDarkColor]}
        >
          <IconButton icon="plus" label="My List" />
          <Button icon="play" style={styles.mainAction} label="Play" />
          <IconButton icon="info" label="Info" />
        </LinearGradient>
      </ImageBackground>
    );
  } else {
    return null;
  }
}

export default Banner;
