import React from 'react';
import { Text as NativeText } from 'react-native';

import styles from 'constants/styles';

function Text({ color = styles.defaultFontColor, style, ...remainingProps }) {
  return <NativeText style={[{ color }, style]} {...remainingProps} />;
}

export default Text;
