import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

const useNavigation = () => {
  const navigationRef = createNavigationContainerRef();

  function navigate(name: any, replace: boolean = false, params?: any) {
    if (navigationRef.isReady()) {
      if (!replace) {
        navigationRef.navigate(name as never, params as never);
      } else {
        navigationRef.dispatch(
          StackActions.replace(name as never, params as never),
        );
      }
    }
  }

  function navigateStack(
    stack: any,
    name: any,
    params?: any,
    replace: boolean = false,
  ) {
    if (navigationRef.isReady()) {
      if (!replace) {
        navigationRef.navigate(stack as never, {screen: name, params} as never);
      } else {
        navigationRef.dispatch(
          StackActions.replace(stack as never, {screen: name, params} as never),
        );
      }
    }
  }

  function goBack() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  }

  return {navigate, navigateStack, goBack};
};

export {useNavigation};
