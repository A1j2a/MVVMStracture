import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import login from '@screens/auth/login';
import NavigationRoute from './NavigationRoute';
import TabBar from './TabBar';
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function ScreenNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigationRoute.splash}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={NavigationRoute.splash}
          component={login}
          options={{ gestureEnabled: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const BottomTabNavigation: React.FC = (): React.JSX.Element => {
  return (
    <BottomTab.Navigator
      initialRouteName={NavigationRoute.home}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <BottomTab.Screen name={NavigationRoute.login} component={login} />
      <BottomTab.Screen name={NavigationRoute.video} component={VideoNavigation} />
      <BottomTab.Screen
        name={NavigationRoute.audio}
        component={AudioNavigation}
      />
      <BottomTab.Screen
        name={NavigationRoute.write}
        component={WriteNavigation}
      />

    </BottomTab.Navigator>
  );
};

const WriteNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationRoute.login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NavigationRoute.login}
        component={login}
        options={{ gestureEnabled: false }}
      />

    </Stack.Navigator>
  );
};

const AudioNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationRoute.login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NavigationRoute.login}
        component={login}
        options={{ gestureEnabled: false }}
      />

    </Stack.Navigator>
  );
};

const VideoNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationRoute.login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NavigationRoute.login}
        component={login}
        options={{ gestureEnabled: false }}
      />

    </Stack.Navigator>
  );
};
