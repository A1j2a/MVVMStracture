import { GET, POST } from './axiosService';
import {
  Login,
  Register,
  ForgotPassword,
  VerifyOtp,
  UserProfile,
} from './endpoints';

export const login = (data: any) => POST(Login, data);
export const register = (data: any) => POST(Register, data);
export const forgotPassword = (data: any) => POST(ForgotPassword, data);
export const verifyOtp = (data: any) => POST(VerifyOtp, data);
export const userProfile = (data: any) =>
  GET(UserProfile + '?user_id=' + data?.user_id);