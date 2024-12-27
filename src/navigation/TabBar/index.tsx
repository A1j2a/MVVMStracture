import Colors from '@colors';
import globalStyles from '@globalStyles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Images from 'src/assets/images';
import NavigationRoute from '../NavigationRoute';
import styles from './styles';

interface HandleTabTextProps {
  name: string;
  isFocused: boolean;
  icon: any;
}

const HandleTabText = ({name, isFocused, icon}: HandleTabTextProps) => {
  return (
    <View style={styles.tabViewWrapper}>
      {icon}
      <Text
        style={[
          {
            color: isFocused ? Colors.black : Colors.transparent,
          },
          styles.label,
        ]}>
        {name}
      </Text>
    </View>
  );
};

const TabBar: React.FC<BottomTabBarProps> = ({
  navigation,
  state,
}): React.JSX.Element => {
  return (
    <View style={styles.container}>
      {state.routes?.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: route.name}],
              }),
            );
          }
        };

        return (
          <Pressable
            onPress={onPress}
            style={globalStyles.container}
            key={index}>
            {route.name === NavigationRoute.home ? (
              <HandleTabText
                isFocused={isFocused}
                name={route?.name}
                icon={
                  isFocused ? (
                    <Images.svg.bottom.HomeActive />
                  ) : (
                    <Images.svg.bottom.HomeInactive />
                  )
                }
              />
            ) : route.name === NavigationRoute.video ? (
              <HandleTabText
                isFocused={isFocused}
                name={route?.name}
                icon={
                  isFocused ? (
                    <Images.svg.bottom.VideoActive />
                  ) : (
                    <Images.svg.bottom.VideoInactive />
                  )
                }
              />
            ) : route.name === NavigationRoute.audio ? (
              <HandleTabText
                isFocused={isFocused}
                name={route?.name}
                icon={
                  isFocused ? (
                    <Images.svg.bottom.AudioActive />
                  ) : (
                    <Images.svg.bottom.AudioInactive />
                  )
                }
              />
            ) : route.name === NavigationRoute.write ? (
              <HandleTabText
                isFocused={isFocused}
                name={route?.name}
                icon={
                  isFocused ? (
                    <Images.svg.bottom.WriteActive />
                  ) : (
                    <Images.svg.bottom.WriteInactive />
                  )
                }
              />
            ) : route.name === NavigationRoute.settings ? (
              <HandleTabText
                isFocused={isFocused}
                name={route?.name}
                icon={
                  isFocused ? (
                    <Images.svg.bottom.SettingsActive />
                  ) : (
                    <Images.svg.bottom.SettingsInactive />
                  )
                }
              />
            ) : null}
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;
