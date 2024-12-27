import React from 'react';
import { Modal, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Images from 'src/assets/images';
import Strings from 'src/shared/constant/strings';
import { setErrorMessage, setIsErrorModalVisible } from 'src/store/authSlice';
import { RootState } from 'src/store/configureStore';
import styles from './styles';

interface ErrorModalProps {
  onDismiss?: any;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  onDismiss,
}): React.JSX.Element => {
  const dispatch = useDispatch();
  const { isErrorModalVisible, errorMessage } = useSelector(
    (state: RootState) => state.authSlice,
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isErrorModalVisible}
      onRequestClose={onDismiss}
      statusBarTranslucent>
      <View style={styles.view}>
        <View style={styles.cardView}>
          <Images.svg.LogoNew style={styles.alignSelf} />

          <Text style={styles.cardText}>
            {typeof errorMessage === 'string'
              ? errorMessage
              : errorMessage
                ?.map((msg: { message: any }) => msg.message)
                .join(', ')}
          </Text>

          {/* <CustomButton
            buttonType="square"
            onPress={() => {
              dispatch(setErrorMessage(''));
              dispatch(setIsErrorModalVisible(false));
            }}
            buttonText={Strings.ok}
            buttonViewStyle={styles.buttonViewStyle}
          /> */}
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
