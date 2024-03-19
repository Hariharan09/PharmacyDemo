import {
  SET_REGISTER_MOBILE_NUMBER,
  SUBMIT_LOGIN_OTP,
  SUBMIT_LOGIN_OTP_FAILURE,
  SUBMIT_LOGIN_OTP_SUCCESS,
  VALIDATE_USER,
  VALIDATE_USER_FAILURE,
  VALIDATE_USER_SUCCESS,
} from '../../../../Redux';

/**
 * validateUser
 */

export const validateUser = (params: any) => {
  return {
    type: VALIDATE_USER,
    payload: params,
  };
};
export const validateUserSuccess = (response: any) => {
  return {
    type: VALIDATE_USER_SUCCESS,
    payload: response,
  };
};
export const validateUserFailure = (error: any) => {
  return {
    type: VALIDATE_USER_FAILURE,
    payload: error,
  };
};

/**
 * submitLoginOtp
 */

export const submitLoginOtp = (params: any) => {
  return {
    type: SUBMIT_LOGIN_OTP,
    payload: params,
  };
};
export const submitLoginOtpSuccess = (response: any) => {
  return {
    type: SUBMIT_LOGIN_OTP_SUCCESS,
    payload: response,
  };
};
export const submitLoginOtpFailure = (error: any) => {
  return {
    type: SUBMIT_LOGIN_OTP_FAILURE,
    payload: error,
  };
};

/**
 * set Register Number
 */

export const setRegisteredMobileNumber = (params: any) => {
  return {
    type: SET_REGISTER_MOBILE_NUMBER,
    payload: params,
  };
};
