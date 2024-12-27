import Colors from '@colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { normalize } from 'src/utlis/responsiveDimension';

interface style {
  buttonView: ViewStyle;
  buttonText: TextStyle;
  button: ViewStyle;
  outlineButtonView: ViewStyle;
  outlineButtonText: TextStyle;
  squareButtonView: ViewStyle;
  squareButtonText: TextStyle;
  roundButtonView: ViewStyle;
}

const styles = StyleSheet.create<style>({
  buttonView: { backgroundColor: Colors.button, alignItems: 'center' },
  buttonText: { marginVertical: normalize(15), color: Colors.white },
  button: {
    height: normalize(52),
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButtonView: {
    borderWidth: 1,
    borderColor: Colors.black,
  },
  outlineButtonText: {
    color: Colors.black,
    textAlign: 'center',
  },
  squareButtonView: {
    backgroundColor: Colors.black,
  },
  squareButtonText: {
    color: Colors.white,
    textAlign: 'center',
  },
  roundButtonView: {
    backgroundColor: Colors.black,
    borderRadius: 46,
    width: '80%',
    alignSelf: 'center',
  },
});

export default styles;
