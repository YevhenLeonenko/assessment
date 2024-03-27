import axios, { AxiosResponse } from 'axios';

const onFulfilled = (response: AxiosResponse) => response.data

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

http.interceptors.response.use(onFulfilled);
