import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from 'ui/general';
import { toCountdown } from 'utils/time';
import { useDetailsState } from 'providers/details';
import styleVars from 'utils/styles';

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  dot: {
    marginHorizontal: 5,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: styleVars.defaultFontColor,
  },
});

function Heading() {
  const { data } = useDetailsState();

  return null;
}

export default Heading;
