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
  const [play, setPlay] = useState(false);
  const { data } = useDetailsState();
  if (data.videos && data.videos.results && data.videos.results.length > 0) {
    const video = data.videos.results[0];

    let imageSource = logo,
      isPlaceholder = true;
    if (data.backdrop_path) {
      imageSource = {
        uri: generateImageUrl(data.backdrop_path, ImageSizes.backdrop),
      };
      isPlaceholder = false;
    }

    return (
      <ImageBackground
        resizeMode={isPlaceholder ? 'contain' : 'cover'}
        style={styles.root}
        source={imageSource}
      >
        <View style={[styles.player, play && styles.playing]}>
          <YoutubePlayer play={play} height={'100%'} videoId={video.key} />
        </View>
        {!play && (
          <TouchableOpacity
            onPress={() => setPlay(true)}
            style={styles.playButtonWrapper}
          >
            <Feather
              style={styles.play}
              color={styleVars.primaryColor}
              name="play-circle"
              size={72}
            />
          </TouchableOpacity>
        )}
      </ImageBackground>
    );
  } else {
    return null;
  }
}

export default VideoPlayer;
