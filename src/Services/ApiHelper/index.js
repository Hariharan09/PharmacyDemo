import axios from 'axios';

import {load} from '../../Utils';

export const SERVER = 'https://devapp.lifepharmacy.com/api';

const axiosApi = axios.create({
  baseURL: SERVER,
});

axios.interceptors.request.use(function (config) {
  return config;
});

const getHeaders = async () => {
  try {
    const value = await load('token');
    console.log(JSON.stringify(value) + '===token');

    if (value) {
      return {Authorization: 'Token ' + value};
    } else {
      return {};
    }
  } catch {
    return {};
  }
};

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
      headers: await getHeaders(),
    })
    .then(response => response.data);
}

export async function post(url, data, config) {
  console.log(url + '=====');
  let headers = {...(await getHeaders())};

  console.log(JSON.stringify(headers) + '====Token');

  return await axiosApi
    .post(url, data, {
      ...config,
      headers: headers,
    })
    .then(response => {
      // console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

export async function postHeader(url, data, config) {
  let headers = {...(await getHeaders())};
  return await axiosApi
    .post(url, data, {
      ...config,
      headers: headers,
    })
    .then(response => {
      return response;
    });
}
