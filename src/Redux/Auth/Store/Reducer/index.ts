import {
  SET_REGISTER_MOBILE_NUMBER,
  VALIDATE_USER,
  VALIDATE_USER_FAILURE,
  VALIDATE_USER_SUCCESS,
  SUBMIT_LOGIN_OTP,
  SUBMIT_LOGIN_OTP_FAILURE,
  SUBMIT_LOGIN_OTP_SUCCESS,
} from '../ActionTypes';
import {AuthSliceStateProp} from '../../Interfaces';

const initialState: AuthSliceStateProp = {
  loading: false,
  error: '',
  validateUser: undefined,
  registeredMobileNumber: undefined,
  submitLoginOtp: undefined,
};

const AuthReducer = (state = initialState, action: any) => {
  console.log('action------------------', action);

  switch (action.type) {
    /**
     * VALIDATE_USER
     */

    case VALIDATE_USER:
      state = {...state, loading: true};
      break;
    case VALIDATE_USER_SUCCESS:
      state = {...state, validateUser: action.payload};
      break;
    case VALIDATE_USER_FAILURE:
      state = {...state, loading: false};
      break;

    /**
     * REGISTER_CUSTOMER
     */

    case SUBMIT_LOGIN_OTP:
      state = {...state, loading: true};
      break;
    case SUBMIT_LOGIN_OTP_SUCCESS:
      state = {...state, submitLoginOtp: action.payload};
      break;
    case SUBMIT_LOGIN_OTP_FAILURE:
      state = {...state, loading: false};
      break;

    /**
     * SET_REGISTER_MOBILE_NUMBER
     */

    case SET_REGISTER_MOBILE_NUMBER:
      state = {...state, registeredMobileNumber: action.payload};
      break;

    default:
      state = state;
      break;
  }
  return state;
};
export {AuthReducer};
