import React from 'react';
import {Modal, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Images from 'src/assets/images';
import NavigationRoute from 'src/navigation/NavigationRoute';
import Strings from 'src/shared/constant/strings';
import {revertAll} from 'src/store/authSlice';
import {RootState} from 'src/store/configureStore';
import CustomButton from '../CustomButton';
import styles from './styles';

interface SessionExpiredModalProps {
  onDismiss?: any;
  navigation?: any;
}

const SessionExpiredModal: React.FC<SessionExpiredModalProps> = ({
  onDismiss,
  navigation,
}): React.JSX.Element => {
  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state: RootState) => state?.authSlice?.userInfo?.data,
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={userInfo !== null ? false : true}
      onRequestClose={onDismiss}
      statusBarTranslucent>
      <View style={styles.view}>
        <View style={styles.cardView}>
          <Images.svg.LogoNew style={styles.alignSelf} />

          <Text style={styles.cardText}>{Strings.session_expired}</Text>

          <CustomButton
            buttonType="square"
            onPress={() => {
              setTimeout(() => {
                navigation.replace(NavigationRoute.loginSelection);
              }, 1000);

              dispatch(revertAll());
            }}
            buttonText={Strings.ok}
            buttonViewStyle={styles.buttonViewStyle}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SessionExpiredModal;
