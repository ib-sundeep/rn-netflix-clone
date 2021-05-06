import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { AppScreens } from 'utils/screen';
import AccountScreen from 'screens/account';
import DetailScreen from 'screens/detail';
import HomeScreen from 'screens/home';
import SearchScreen from 'screens/search';
import styles from 'utils/styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: styles.mainBackgroundColor,
    primary: styles.primaryColor,
    text: styles.defaultFontColor,
  },
};

function TabsContainer() {
  return null;
}

export default function App() {
  return null;
}
