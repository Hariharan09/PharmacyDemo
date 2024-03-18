import {URL_VALIDATE_USER, post, URL_SUBMIT_LOGIN_OTP} from '@Services';

/**
 * Assoctation
 * @param {*} payload
 * @returns
 */

// export const getDashboardApi = payload => post(URL_GET_DASHBOARD, payload, {});

/**
 *
 * @param {-------} payload
 * @returns
 */

export const validateUserApi = payload => post(URL_VALIDATE_USER, payload, {});
export const submitLoginOtpApi = payload =>
  post(URL_SUBMIT_LOGIN_OTP, payload, {});
