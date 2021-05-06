import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';

import { generateImageUrl, ImageSizes } from 'utils/tmdb';
import { useDetailsState } from 'providers/details';
import logo from 'assets/logo.png';
import styleVars from 'utils/styles';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    aspectRatio: styleVars.videoAspectRatio,
  },
  player: {
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: 0,
  },
  playing: {
    opacity: 1,
  },
  playButtonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function VideoPlayer() {
    return null;
}

export default VideoPlayer;
