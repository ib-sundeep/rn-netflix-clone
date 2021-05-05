import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { generateImageUrl, ImageSizes } from '../utils/tmdb';
import styleVars, { getPaddingFromAspectRatio } from 'utils/styles';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  poster: {
    backgroundColor: '#515151',
    width: styleVars.cardWidth,
    paddingTop: getPaddingFromAspectRatio(styleVars.posterAspectRatio),
    borderRadius: styleVars.borderRadius,
  },
});

function MediaCard({ data, style = {}, ...remainingProps }) {
  const imageUrl = generateImageUrl(data.poster_path, ImageSizes.card);
  return (
    <View style={[styles.root, style]} {...remainingProps}>
      <ImageBackground
        resizeMode="cover"
        style={styles.poster}
        source={{ uri: imageUrl }}
      />
    </View>
  );
}

export default MediaCard;
