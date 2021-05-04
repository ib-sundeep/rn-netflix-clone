import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text } from 'ui/general';
import logo from 'assets/logo.png';
import styleVars from 'constants/styles';

const styles = StyleSheet.create({
  root: {
    position: 'fixed',
    height: styleVars.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 1,
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
  navItem: {
    fontSize: 20,
    fontWeight: 600,
  },
  rightSpacer: {
    width: 36,
  },
});

function Header() {
  return (
    <LinearGradient
      colors={[styleVars.gradientDarkColor, styleVars.gradientLightColor]}
      style={styles.root}
    >
      <Image style={styles.logo} source={logo} />
      <View style={styles.nav}>
        <Text style={styles.navItem}>TV Shows</Text>
        <Text style={styles.navItem}>Movies</Text>
      </View>
      <View style={styles.rightSpacer}></View>
    </LinearGradient>
  );
}

export default Header;
