import Colors from '@colors';

import { StyleSheet } from 'react-native';
import { normalize } from 'src/utlis/responsiveDimension';

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: Colors.color_3E3E3E,
    borderRadius: 1000,
    shadowColor: Colors.black,
    shadowOpacity: 1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowRadius: 1,
    alignSelf: 'center',
    position: 'absolute',
    bottom: normalize(70),
    elevation: 10,
  },
  toastMessage: {
    paddingVertical: normalize(13),
    textAlign: 'center',
    paddingHorizontal: normalize(15),
    color: Colors.white,
  },
});

export default styles;
