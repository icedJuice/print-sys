import Axios from "axios";

const instance = Axios.create({
  baseURL: 'https://www.hanguozhi.com/api',
  timeout: 6000,
});

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export const GET = (url, params) => () => {
  if (!url) {
    console.error('url is null');
    return null;
  }
  return instance.get(url, { params });
}
export const POST = (url, data, params) => () => {
  if (!url) {
    console.error('url is null');
    return null;
  }
  return instance.post(url, { data, params });
}