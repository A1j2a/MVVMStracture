import globalStyles from '@globalStyles';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

interface AuthContainerProps {
  children: string | JSX.Element | JSX.Element[];
  isView?: boolean;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ children, isView }) => {
  return isView ? (
    <View style={globalStyles.containerBg}>{children}</View>
  ) : (
    <SafeAreaView style={globalStyles.containerBg}>{children}</SafeAreaView>
  );
};

export default AuthContainer;
