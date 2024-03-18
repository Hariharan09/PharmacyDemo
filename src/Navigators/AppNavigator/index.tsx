/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef, useBackButtonHandler} from '../NavigationUtilities';
import {AuthStack, HomeStack} from '../Stacks';

export type NavigatorParamList = {
  'auth-stack': undefined;
  'home-stack': undefined;
};
const INITIAL_STACK = 'auth-stack';

const AppStack = createNativeStackNavigator<NavigatorParamList>();

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> { }

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  useBackButtonHandler(canExit);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <AppStack.Navigator
        initialRouteName={INITIAL_STACK}
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name={INITIAL_STACK} component={AuthStack} />
        <AppStack.Screen name={'home-stack'} component={HomeStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

const exitRoutes = ['splash'];

export const canExit = (routeName: string) => exitRoutes.includes(routeName);
