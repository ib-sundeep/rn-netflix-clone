import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styleVars from 'utils/styles';
import Text from './Text';

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: styleVars.borderRadius,
  },
  primary: {
    backgroundColor: styleVars.primaryColor,
  },
  icon: {
    marginRight: 5,
  },
  default: {
    backgroundColor: styleVars.contrastColor,
  },
});

function Button({
  label,
  icon,
  type = 'default',
  style = {},
  ...remainingProps
}) {
  const fontColor =
    type === 'default'
      ? styleVars.contrastFontColor
      : styleVars.defaultFontColor;
  return (
    <TouchableHighlight
      style={[styles.base, styles[type], style]}
      {...remainingProps}
    >
      <>
        {icon && (
          <Feather
            style={styles.icon}
            name={icon}
            color={fontColor}
            size={16}
          />
        )}
        <Text weight="bold" color={fontColor}>
          {label}
        </Text>
      </>
    </TouchableHighlight>
  );
}

export default Button;
