import {
  SHOW_LOADER,
  HIDE_LOADER,
  USER_LOGIN_DETAILS,
  SYNC_STATUS,
} from '../ActionTypes';
import {AppSliceStateProp} from '../../Interfaces';

const initialState: AppSliceStateProp = {
  loading: false,
  loginDetails: undefined,
  isSync: {dashboard: false, issue: false, company: false, feed: false},
};

const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_LOADER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case HIDE_LOADER:
      state = {
        ...state,
        loading: false,
      };
      break;
    case USER_LOGIN_DETAILS:
      state = {
        ...state,
        loginDetails: {...state.loginDetails, ...action.payload},
      };
      break;
    case SYNC_STATUS:
      console.log(JSON.stringify(action.payload) + '====SYNC_STATUS');

      state = {...state, isSync: action.payload};
      break;

    default:
      state = state;
      break;
  }

  return state;
};

export {AppReducer};
