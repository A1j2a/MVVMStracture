import Colors from '@colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { normalize } from 'src/utlis/responsiveDimension';

interface style {
  view: ViewStyle;
  cardView: ViewStyle;
  cardText: TextStyle;
  buttonViewStyle: ViewStyle;
  alignSelf: ViewStyle;
}

const styles = StyleSheet.create<style>({
  view: {
    backgroundColor: Colors.shadow,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView: {
    backgroundColor: Colors.white,
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
  cardText: {
    color: Colors.red_button,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  buttonViewStyle: {
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: normalize(10),
    marginTop: normalize(20),
  },
  alignSelf: { alignSelf: 'center' },
});

export default styles;
