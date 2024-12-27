/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {Animated, Keyboard, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import globalStyles from '@globalStyles';
import {showToast} from 'src/store/authSlice';
import {RootState} from 'src/store/configureStore';
import styles from './styles';

const Toast = () => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const toastMessage = useSelector(
    (state: RootState) => state.authSlice.toastMessage,
  );

  const fadeIn = () => {
    Keyboard.dismiss();
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (!finished) {
        return;
      }
      fadeOut();
    });
  };

  const fadeOut = () => {
    setTimeout(() => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start(() => dispatch(showToast('')));
    }, 2500);
  };
  useEffect(() => {
    toastMessage && fadeIn();
  }, [toastMessage]);

  return (
    toastMessage && (
      <Animated.View
        style={[
          globalStyles.marginHorizontal20,
          styles.toastContainer,
          {opacity: fadeAnimation},
        ]}>
        <Text style={[globalStyles.caption_16_400, styles.toastMessage]}>
          {toastMessage}
        </Text>
      </Animated.View>
    )
  );
};

export default Toast;
