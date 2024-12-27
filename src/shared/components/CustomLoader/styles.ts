import Colors from '@colors';
import { StyleSheet } from 'react-native';
import { normalize } from 'src/utlis/responsiveDimension';

const Styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.shadow,
  },
  image: {
    width: normalize(200),
    height: normalize(200),
  },
});

export default Styles;
