import Colors from '@colors';

import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { normalize } from 'src/utlis/responsiveDimension';

interface style {
  text: TextStyle;
  view: ViewStyle;
  marginLeft15: ViewStyle;
  marginRight15: ViewStyle;
  marginHorizontal15: ViewStyle;
  headerView: ViewStyle;
  overlay: ViewStyle;
  alertContainer: ViewStyle;
  title: TextStyle;
  message: TextStyle;
  buttonContainer: ViewStyle;
}

const styles = StyleSheet.create<style>({
  headerView: {
    marginTop: Platform.OS === 'android' ? normalize(45) : normalize(10),
  },
  text: { color: Colors.black, marginLeft: normalize(10) },
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  marginLeft15: { marginLeft: normalize(15) },
  marginRight15: { marginRight: normalize(15) },
  marginHorizontal15: { marginHorizontal: normalize(15) },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.shadow,
  },
  alertContainer: {
    width: normalize(300),
    padding: normalize(20),
    backgroundColor: Colors.white,
    borderRadius: normalize(10),
    alignItems: 'center',
  },
  title: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginBottom: normalize(10),
  },
  message: {
    fontSize: normalize(16),
    textAlign: 'center',
    marginBottom: normalize(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: normalize(10),
    margin: normalize(5),
    borderRadius: normalize(5),
    backgroundColor: Colors.black,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
