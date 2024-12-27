

import Colors from '@colors';
import { Provider as PaperProvider } from 'react-native-paper';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'src/store/configureStore';
import Navigation from './navigation/Navigation';
import CustomLoader from './shared/components/CustomLoader';
import ErrorModal from './shared/components/ErrorModal';
import Toast from './shared/components/Toast';
import SessionExpiredModal from './shared/components/SessionExpiredModal';
import { LogBox, StatusBar } from 'react-native';



LogBox.ignoreAllLogs();

const App = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <MenuProvider>
            <StatusBar
              barStyle={'dark-content'}
              translucent
              backgroundColor={Colors.transparent}
            />
            <Navigation />
            <CustomLoader />
            <ErrorModal />
            <Toast />
            <SessionExpiredModal />
          </MenuProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
