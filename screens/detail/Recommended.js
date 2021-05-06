import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from 'ui/general';
import { useDetailsState } from 'providers/details';
import MediaGrid from 'ui/MediaGrid';

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
});

function Recommended() {
  const { data } = useDetailsState();
    return null;
}
  
export default Recommended;
