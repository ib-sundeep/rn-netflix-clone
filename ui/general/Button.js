import React from 'react';
import { StyleSheet } from 'react-native';

import stylesVars from 'constants/styles';

const styles = StyleSheet.create({
  base: {
    padding: 10,
    borderRadius: stylesVars.borderRadius,
  },
  primary: {
    backgroundColor: stylesVars.primaryColor,
  },
});

function Button({ label, type, style = {}, ...remainingProps }) {
  return (
    <TouchableHighlight
      style={[styles.base, styles[type], style]}
      {...remainingProps}
    >
      <Text>{label}</Text>
    </TouchableHighlight>
  );
}

export default Button;
