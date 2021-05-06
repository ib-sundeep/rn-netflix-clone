import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useSearchActions, useSearchState } from 'providers/search';
import styleVars from 'utils/styles';

const styles = StyleSheet.create({
  root: {
    margin: 10,
    backgroundColor: styleVars.secondaryBackgroundColor,
    borderRadius: styleVars.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flexGrow: 1,
    color: styleVars.defaultFontColor,
  },
});

function SearchInput() {
  const { kw } = useSearchState();
  const { fetchResults, setKw } = useSearchActions();

  return null;
}

export default SearchInput;
