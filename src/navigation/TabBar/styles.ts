import Colors from '@colors';

import { Dimensions, Platform, StyleSheet } from 'react-native';
import { normalize } from 'src/utlis/responsiveDimension';

const styles = StyleSheet.create({
  tabViewWrapper: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height:
      Dimensions.get('screen').width >= 393
        ? normalize(100)
        : Platform.OS === 'android'
          ? normalize(85)
          : normalize(90),
    alignItems: 'center',
  },
  label: {
    marginTop: normalize(5),
    color: Colors.black,
  },
  circle: {
    width: normalize(6),
    height: normalize(6),
    borderRadius: 100,
    marginVertical: normalize(6),
  },
});

export default styles;
