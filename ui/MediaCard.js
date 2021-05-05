import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { generateImageUrl, ImageSizes } from '../utils/tmdb';
import logo from 'assets/logo.png';
import styleVars, { getPaddingFromAspectRatio } from 'utils/styles';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    borderRadius: styleVars.borderRadius,
    overflow: 'hidden',
  },
  poster: {
    backgroundColor: styleVars.secondaryBackgroundColor,
    paddingTop: getPaddingFromAspectRatio(styleVars.posterAspectRatio),
  },
  fixedWidth: {
    width: styleVars.cardWidth,
  },
});

function MediaCard({ data, freeWidth = false, style = {}, ...remainingProps }) {
  let imageSource = logo,
    isPlaceholder = true;
  if (data.poster_path) {
    imageSource = { uri: generateImageUrl(data.poster_path, ImageSizes.card) };
    isPlaceholder = false;
  }
  return (
    <View style={[styles.root, style]} {...remainingProps}>
      <ImageBackground
        resizeMode={isPlaceholder ? 'contain' : 'center'}
        style={[styles.poster, !freeWidth && styles.fixedWidth]}
        source={imageSource}
      />
    </View>
  );
}

export default MediaCard;
