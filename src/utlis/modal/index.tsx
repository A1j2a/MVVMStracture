import {
  setErrorMessage,
  setIsErrorModalVisible,
  showToast,
} from 'src/store/authSlice';

export const handleMutation = (dispatch: any, response: any) => {
  if (!response?.status) {
    dispatch(setIsErrorModalVisible(true));
    dispatch(setErrorMessage(response?.message || response?.msg));
  }
};

export const handleSuccuss = (dispatch: any, response: any) => {
  if (response?.status) {
    dispatch(showToast(response?.message || response?.msg));
  }
};

export const handleMessage = (dispatch: any, response: string) => {
    dispatch(showToast(response));
};


