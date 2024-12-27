import {PayloadAction, createAction, createSlice} from '@reduxjs/toolkit';

export interface UserInfoState {
  user_id: any;
  token: string;
  firstName: string;
  lastName: string;
  phoneNumber: any;
  email: string;
  militaryCode: any;
}

export interface UserState {
  isLoggedIn: boolean;
  userInfo: any;
  errorMessage: any;
  isErrorModalVisible: boolean;
  toastMessage: any;
  setupVerifierModal: any;
  recipientsData: any;
}

const initialState: UserState = {
  isLoggedIn: false,
  userInfo: {
    // token: '',
    // user_id: '',
    // firstName: '',
    // lastName: '',
    // phoneNumber: '',
    // email: '',
    // militaryCode: '',
  },
  errorMessage: '',
  isErrorModalVisible: false,
  toastMessage: '',
  setupVerifierModal: true,
  recipientsData: [],
};

export const revertAll = createAction('REVERT_ALL');

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
    setErrorMessage(
      state,
      action: PayloadAction<
        string | {field: string; message: string}[] | undefined
      >,
    ) {
      if (action.payload) {
        state.errorMessage = action.payload;
      }
    },
    setIsErrorModalVisible(state, action: PayloadAction<boolean>) {
      state.isErrorModalVisible = action.payload;
    },
    showToast(state, action: PayloadAction<string>) {
      state.toastMessage = action.payload;
    },
    setSetupVerifierModal: (state, action: PayloadAction<boolean>) => {
      state.setupVerifierModal = action.payload;
    },
    setRecipientsData: (state, action: PayloadAction<any>) => {
      state.recipientsData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(revertAll, () => initialState);
  },
});

export const {
  setIsLoggedIn,
  setUserInfo,
  setErrorMessage,
  setIsErrorModalVisible,
  showToast,
  setSetupVerifierModal,
  setRecipientsData,
} = authSlice.actions;

export default authSlice.reducer;
