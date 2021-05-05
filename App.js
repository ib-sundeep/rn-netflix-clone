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
  return (
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
            <Feather name="home" color={color} size={styles.tabBarIconSize} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreens.search}
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Feather name="search" color={color} size={styles.tabBarIconSize} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreens.account}
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={styles.tabBarIconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: styles.mainBackgroundColor }}
    >
      <StatusBar barStyle="light-content" />
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name={AppScreens.tabs}
            component={TabsContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={AppScreens.detail}
            component={DetailScreen}
            options={{
              headerStyle: { backgroundColor: styles.mainBackgroundColor },
              headerBackTitleVisible: false,
              headerTitle: '',
              headerTintColor: styles.defaultFontColor,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
