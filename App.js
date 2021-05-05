import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { AppScreens } from 'utils/screen';
import AccountScreen from 'screens/account';
import HomeScreen from 'screens/home';
import SearchScreen from 'screens/search';
import styles from 'utils/styles';

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

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: styles.mainBackgroundColor }}
    >
      <StatusBar barStyle="light-content" />
      <NavigationContainer theme={AppTheme}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: styles.defaultFontColor,
            tabStyle: { padding: 5 },
            style: {
              backgroundColor: styles.mainBackgroundColor,
            },
          }}
        >
          <Tab.Screen
            name={AppScreens.home}
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Feather
                  name="home"
                  color={color}
                  size={styles.tabBarIconSize}
                />
              ),
            }}
          />
          <Tab.Screen
            name={AppScreens.search}
            component={SearchScreen}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color }) => (
                <Feather
                  name="search"
                  color={color}
                  size={styles.tabBarIconSize}
                />
              ),
            }}
          />
          <Tab.Screen
            name={AppScreens.account}
            component={AccountScreen}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({ color }) => (
                <Feather
                  name="user"
                  color={color}
                  size={styles.tabBarIconSize}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
