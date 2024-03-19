import {
  hideLoader,
  showLoader,
  VALIDATE_USER,
  validateUserFailure,
  validateUserSuccess,
  SUBMIT_LOGIN_OTP,
  submitLoginOtpSuccess,
  submitLoginOtpFailure,
} from '../../../Redux';
import {validateUserApi, submitLoginOtpApi} from '../../../Services';
import {call, put, takeLatest} from 'redux-saga/effects';

/**
 * Validate user
 */

function* validateUserSaga(action) {
  try {
    yield put(showLoader());
    const response = yield call(validateUserApi, action.payload.params);
    if (response.success) {
      yield put(hideLoader());
      yield put(validateUserSuccess({...response}));
      yield call(action.payload.onSuccess(response));
    } else {
      yield put(hideLoader());
      yield put(validateUserFailure(response.error_message));
      yield call(action.payload.onError(response));
    }
  } catch (error) {
    yield put(hideLoader());
    yield put(validateUserFailure(error));
    yield call(action.payload.onError(error));
  }
}

/**
 * submitLoginSaga
 */

function* submitLoginOtpSaga(action) {
  try {
    yield put(showLoader());
    const response = yield call(submitLoginOtpApi, action.payload.params);
    if (response.success) {
      yield put(hideLoader());
      yield put(submitLoginOtpSuccess({...response}));
      yield call(action.payload.onSuccess(response));
    } else {
      yield put(hideLoader());
      yield put(submitLoginOtpFailure(response.error_message));
      yield call(action.payload.onError(response));
    }
  } catch (error) {
    yield put(hideLoader());
    yield put(submitLoginOtpFailure(error));
    yield call(action.payload.onError(error));
  }
}

///watcher///

function* AuthSaga() {
  yield takeLatest(VALIDATE_USER, validateUserSaga);
  yield takeLatest(SUBMIT_LOGIN_OTP, submitLoginOtpSaga);
}

export default AuthSaga;
