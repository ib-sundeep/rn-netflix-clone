import React from 'react';
import { Text as NativeText } from 'react-native';

import styles from 'constants/styles';

function Text({ style, ...remainingProps }) {
  return (
    <NativeText
      style={{ color: styles.defaultFontColor }}
      {...remainingProps}
    />
  );
}

export default Text;
