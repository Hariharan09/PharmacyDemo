/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */

import '@I18n';
import '@Utils/IgnoreWarnings';
import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {AppNavigator} from '@Navigators';
import {ErrorBoundary} from '@Modules';
import {store, sagaMiddleware, rootSaga, persistor} from '@Redux';
import {Provider} from 'react-redux';
import {SafeAreaView, AppLoader} from '@Components';
import {AppProvider} from '@Contexts';
import {PersistGate} from 'redux-persist/integration/react';

const PGate = PersistGate as any;

sagaMiddleware.run(rootSaga);

/**
 *
 * @returns task 1
 */

function App() {
  return (
    <Provider store={store}>
      <PGate loading={null} persistor={persistor}>
        <SafeAreaView flex={1}>
          <AppProvider>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <ErrorBoundary catchErrors={'always'}>
                <AppNavigator />
                <AppLoader />
              </ErrorBoundary>
            </SafeAreaProvider>
          </AppProvider>
        </SafeAreaView>
      </PGate>
    </Provider>
  );
}

export default App;
