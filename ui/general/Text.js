import React from 'react';
import { Text as NativeText } from 'react-native';

import styleVars from 'utils/styles';

const fontSizes = {
  small: styleVars.smallFontSize,
  default: styleVars.defaultFontSize,
  large: styleVars.largeFontSize,
  xLarge: styleVars.xLargeFontSize,
};

const fontColors = {
  default: styleVars.defaultFontColor,
  primary: styleVars.primaryColor,
  dark: styleVars.darkFontColor,
  hint: styleVars.hintFontColor,
};

const fontWeights = {
  default: styleVars.defaultFontWeight,
  bold: styleVars.boldFontWeight,
  bolderFontWeight: styleVars.bolderFontWeight,
};

function Text({
  color = 'default',
  size = 'default',
  weight = 'default',
  style,
  ...remainingProps
}) {
  let _color = color;
  if (typeof _color === 'string') {
    _color = fontColors[_color];
  }

  let _size = size;
  if (typeof _size === 'string') {
    _size = fontSizes[_size];
  }

  let _weight = weight;
  if (typeof _weight === 'string') {
    _weight = fontWeights[_weight];
  }

  return (
    <NativeText
      style={[{ color: _color, fontSize: _size, fontWeight: _weight }, style]}
      {...remainingProps}
    />
  );
}

export default Text;
