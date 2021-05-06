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

  return (
    <View style={styles.root}>
      <Text size="xLarge" weight="bold">
        {data.original_title || data.original_name}
      </Text>
      <View style={styles.row}>
        {Boolean(data.release_date || data.first_air_date) && (
          <Text size="small" style={styles.feature}>
            {(data.release_date || data.first_air_date).split('-')[0]}
          </Text>
        )}
        {data.genres.length > 0 && (
          <>
            <View style={styles.dot} />
            <Text size="small" style={styles.feature}>
              {data.genres.map((o) => o.name).join(', ')}
            </Text>
          </>
        )}
        {Boolean(data.runtime) && (
          <>
            <View style={styles.dot} />
            <Text size="small" style={styles.feature}>
              {toCountdown(data.runtime)}
            </Text>
          </>
        )}
      </View>
    </View>
  );
}

export default Heading;
