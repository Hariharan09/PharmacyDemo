import {createStore, applyMiddleware, compose, combineReducers} from 'redux';

import createSagaMiddleware from 'redux-saga';
import {AppReducer, AuthReducer} from '../../Redux';
import rootSaga from '../Sagas';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'Baseapp',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  AppReducer,
  AuthReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    try {
      AsyncStorage.clear();
      action.payload.onSuccess();
      return reducer(undefined, action);
    } catch {
      action.payload.onFailure();
    }
  }

  return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, sagaMiddleware, rootSaga, persistor};
