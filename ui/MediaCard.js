import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AppScreens } from 'utils/screen';
import { generateImageUrl, ImageSizes } from '../utils/tmdb';
import logo from 'assets/logo.png';
import styleVars from 'utils/styles';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    borderRadius: styleVars.borderRadius,
    overflow: 'hidden',
  },
  poster: {
    backgroundColor: styleVars.secondaryBackgroundColor,
    aspectRatio: styleVars.posterAspectRatio,
  },
  fixedWidth: {
    width: styleVars.cardWidth,
  },
});

function MediaCard({ data, freeWidth = false, style = {}, ...remainingProps }) {
  const navigation = useNavigation();
  let imageSource = logo,
    isPlaceholder = true;
  if (data.poster_path) {
    imageSource = { uri: generateImageUrl(data.poster_path, ImageSizes.card) };
    isPlaceholder = false;
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push(AppScreens.detail, {
          mediaType: data.media_type,
          id: data.id,
        })
      }
      style={[styles.root, style]}
      {...remainingProps}
    >
      <ImageBackground
        resizeMode={isPlaceholder ? 'center' : 'cover'}
        style={[styles.poster, !freeWidth && styles.fixedWidth]}
        source={imageSource}
      />
    </TouchableOpacity>
  );
}

export default MediaCard;
