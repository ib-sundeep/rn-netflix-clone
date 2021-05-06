import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { Button, HintLayout, IconButton, LoadingLayout } from 'ui/general';
import { generateImageUrl, ImageSizes } from 'utils/tmdb';
import { useTrendingState } from 'providers/trending';
import styleVars from 'utils/styles';
import { AppScreens } from 'utils/screen';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    aspectRatio: styleVars.posterAspectRatio,
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
  const navigation = useNavigation();
  const { trending, isLoading, error } = useTrendingState();
    return null;
}

export default Banner;
