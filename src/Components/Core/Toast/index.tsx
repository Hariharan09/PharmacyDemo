import Toast from 'react-native-simple-toast';

const ToastView = (message: string) => {
  return Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
};

export default ToastView;
