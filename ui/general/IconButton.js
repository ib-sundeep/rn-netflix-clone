import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styleVars from 'utils/styles';
import Text from './Text';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  label: {
    marginTop: 5,
  },
});

function IconButton({
  icon,
  color = styleVars.defaultFontColor,
  size = 20,
  label,
  ...remainingProps
}) {
  return (
    <TouchableOpacity style={styles.root} {...remainingProps}>
      <Feather name={icon} color={color} size={size} />
      {label && (
        <Text style={[styles.label, { color, fontSize: size / 1.7 }]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default IconButton;
