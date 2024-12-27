import Lottie from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Images from 'src/assets/images';
import { RootState } from 'src/store/configureStore';
import styles from './styles';

interface CustomLoaderProps { }

const CustomLoader: React.FC<CustomLoaderProps> = () => {
  const isLoading = useSelector(
    (state: RootState) => state.extraSlice.isLoading,
  );

  return isLoading ? (
    <View style={styles.container}>

      <Lottie
        source={Images.lottie.BlackLoader}
        autoPlay
        loop
        style={styles.image}
      />
    </View>
  ) : null;
};

export default CustomLoader;
