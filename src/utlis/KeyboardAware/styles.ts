import Colors from '@colors';
import {StyleSheet, ViewStyle} from 'react-native';

interface style {
  flexGrow: ViewStyle;
  keyboardStyle: ViewStyle;
}

const styles = StyleSheet.create<style>({
  flexGrow: {flexGrow: 1},
  keyboardStyle: {flexGrow: 1, backgroundColor: Colors.transparent},
});

export default styles;
