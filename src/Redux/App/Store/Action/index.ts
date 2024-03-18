import {
  SHOW_LOADER,
  HIDE_LOADER,
  USER_LOGIN_DETAILS,
  USER_LOGOUT,
  SYNC_STATUS,
} from '../ActionTypes';

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const userLoginDetails = (params: any) => {
  return {
    type: USER_LOGIN_DETAILS,
    payload: params,
  };
};

export const userLogout = (params: any) => {
  return {
    type: USER_LOGOUT,
    payload: params,
  };
};

export const setSyncStatus = (params: any) => {
  return {
    type: SYNC_STATUS,
    payload: params,
  };
};
