import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import styleVars from 'utils/styles';

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    padding: 10,
  },
  large: {
    padding: 20,
  },
});

function LoadingLayout({ style, size = 'large' }) {
  return (
    <View style={[styles.root, styles[size], style]}>
      <ActivityIndicator size={size} color={styleVars.primaryColor} />
    </View>
  );
}

export default LoadingLayout;
