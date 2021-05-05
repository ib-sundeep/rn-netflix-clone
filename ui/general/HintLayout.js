import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './Button';
import Text from './Text';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    height: '100%',
  },
  message: {
    textAlign: 'center',
  },
  action: {
    marginTop: 10,
  },
});

function HintLayout({ message, actionLabel, actionFn }) {
  return (
    <View style={styles.root}>
      <Text style={styles.message}>{message}</Text>
      {actionLabel && actionFn && (
        <Button
          type="primary"
          style={styles.action}
          onPress={actionFn}
          label={actionLabel}
        />
      )}
    </View>
  );
}

export default HintLayout;
