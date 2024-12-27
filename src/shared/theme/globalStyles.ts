import Colors from '@colors';
import Font from '@font';
import FontSize from '@fontSize';

import {
  ImageStyle,
  Platform,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { normalize } from 'src/utlis/responsiveDimension';

interface style {
  container: ViewStyle;
  containerBg: ViewStyle;
  marginHorizontal20: ViewStyle;
  marginVertical20: ViewStyle;
  marginTop10: ViewStyle;
  marginTop20: ViewStyle;
  marginTop30: ViewStyle;
  marginTop40: ViewStyle;
  marginBottom10: ViewStyle;
  marginBottom20: ViewStyle;
  marginBottom30: ViewStyle;
  marginBottom40: ViewStyle;
  logo_image: ImageStyle;
  rowCenter: ViewStyle;
  dummyImage: ImageStyle;

  caption_10_700: TextStyle;
  caption_11_600: TextStyle;
  caption_12_500: TextStyle;
  caption_12_700: TextStyle;
  caption_13_600: TextStyle;
  caption_13_700: TextStyle;
  caption_14_400: TextStyle;
  caption_14_500: TextStyle;
  caption_14_600: TextStyle;
  caption_15_400: TextStyle;
  caption_16_400: TextStyle;
  caption_16_500: TextStyle;
  caption_16_600: TextStyle;
  caption_16_700: TextStyle;
  caption_20_400: TextStyle;
  caption_20_600: TextStyle;
  caption_20_700: TextStyle;
  caption_32_600: TextStyle;
}

const globalStyles = StyleSheet.create<style>({
  container: {
    flex: 1,
  },
  containerBg: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  marginHorizontal20: {
    marginHorizontal: normalize(20),
  },
  marginVertical20: {
    marginVertical: normalize(20),
  },
  marginTop10: { marginTop: normalize(10) },
  marginTop20: { marginTop: normalize(20) },
  marginTop30: { marginTop: normalize(30) },
  marginTop40: { marginTop: normalize(40) },
  marginBottom10: { marginBottom: normalize(10) },
  marginBottom20: { marginBottom: normalize(20) },
  marginBottom30: { marginBottom: normalize(30) },
  marginBottom40: { marginBottom: normalize(40) },
  logo_image: {
    width: normalize(180),
    height: normalize(180),
    alignSelf: 'center',
    marginTop: Platform.OS === 'android' ? normalize(50) : 0,
  },
  rowCenter: { flexDirection: 'row', alignItems: 'center' },
  dummyImage: {
    width: normalize(65),
    height: normalize(65),
    borderRadius: 100,
  },

  caption_10_700: {
    fontSize: FontSize.font_10,
    fontFamily: Font.LatoBold_700,
  },
  caption_11_600: {
    fontSize: FontSize.font_11,
    fontFamily: Font.LatoRegular_400,
  },
  caption_12_500: {
    fontSize: FontSize.font_12,
    fontFamily: Font.LatoRegular_400,
  },
  caption_12_700: {
    fontSize: FontSize.font_12,
    fontFamily: Font.LatoBold_700,
  },
  caption_13_600: {
    fontSize: FontSize.font_13,
    fontFamily: Font.LatoRegular_400,
  },
  caption_13_700: {
    fontSize: FontSize.font_13,
    fontFamily: Font.LatoBold_700,
  },
  caption_14_400: {
    fontSize: FontSize.font_14,
    fontFamily: Font.LatoRegular_400,
  },
  caption_14_500: {
    fontSize: FontSize.font_14,
    fontFamily: Font.LatoRegular_400,
  },
  caption_14_600: {
    fontSize: FontSize.font_14,
    fontFamily: Font.LatoBold_700,
  },
  caption_15_400: {
    fontSize: FontSize.font_15,
    fontFamily: Font.LatoRegular_400,
  },
  caption_16_400: {
    fontSize: FontSize.font_16,
    fontFamily: Font.LatoRegular_400,
  },
  caption_16_500: {
    fontSize: FontSize.font_16,
    fontFamily: Font.LatoRegular_400,
  },
  caption_16_600: {
    fontSize: FontSize.font_16,
    fontFamily: Font.LatoBold_700,
  },
  caption_16_700: {
    fontSize: FontSize.font_16,
    fontFamily: Font.LatoBold_700,
  },
  caption_20_400: {
    fontSize: FontSize.font_20,
    fontFamily: Font.LatoRegular_400,
  },
  caption_20_600: {
    fontSize: FontSize.font_20,
    fontFamily: Font.LatoBold_700,
  },
  caption_20_700: {
    fontSize: FontSize.font_20,
    fontFamily: Font.LatoBold_700,
  },
  caption_32_600: {
    fontSize: FontSize.font_32,
    fontFamily: Font.LatoBold_700,
  },
});

export default globalStyles;
