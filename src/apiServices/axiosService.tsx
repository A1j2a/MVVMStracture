import axios, { AxiosRequestConfig } from 'axios';
import { BaseUrl } from './endpoints';

export const AxiosInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

//GET METHOD
export const GET = async (url: string, config?: AxiosRequestConfig) => {
  const response = await AxiosInstance.get(url, { ...config, timeout: 120000 });
  return response;
};

//POST METHOD
export const POST = async (url: string, body: any) => {
  const response = await AxiosInstance.post(url, body, {
    timeout: 120000,
  });
  return response;
};


