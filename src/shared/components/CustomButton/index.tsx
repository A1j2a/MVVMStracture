import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import globalStyles from '@globalStyles';

interface CustomButtonProps {
  buttonText: string;
  buttonViewStyle?: any;
  textStyle?: any;
  onPress: () => void;
  buttonType?: 'outline' | 'square' | 'round';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText,
  buttonViewStyle,
  textStyle,
  onPress,
  buttonType = 'outline',
}) => {
  let buttonStyle, buttonTextStyle;

  switch (buttonType) {
    case 'outline':
      buttonStyle = [styles.button, styles.outlineButtonView, buttonViewStyle];
      buttonTextStyle = [
        globalStyles.caption_20_600,
        styles.outlineButtonText,
        textStyle,
      ];
      break;
    case 'square':
      buttonStyle = [styles.button, styles.squareButtonView, buttonViewStyle];
      buttonTextStyle = [
        globalStyles.caption_20_600,
        styles.squareButtonText,
        textStyle,
      ];

      break;
    case 'round':
      buttonStyle = [styles.button, styles.roundButtonView, buttonViewStyle];
      buttonTextStyle = [
        globalStyles.caption_20_600,
        styles.squareButtonText,
        textStyle,
      ];
      break;
    default:
      buttonStyle = [styles.button, buttonViewStyle];
      buttonTextStyle = [globalStyles.caption_20_600];
  }

  return (
    <TouchableOpacity activeOpacity={0.8} style={buttonStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
