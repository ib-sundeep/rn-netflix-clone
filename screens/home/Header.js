import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text } from 'ui/general';
import logo from 'assets/logo.png';
import styleVars from 'utils/styles';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    height: styleVars.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 2,
  },
  logo: {
    width: 36,
    height: 36,
  },
  nav: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navItem: {},
  rightSpacer: {
    width: 36,
  },
});

function Header() {
  return null;
}

export default Header;
