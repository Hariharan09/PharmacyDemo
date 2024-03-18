import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Login, Otp} from '../../../Modules';

export type AuthStackParamList = {
  splash: undefined;
  login: undefined;
  register: undefined;
  otp: undefined;
};

const Auth = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'splash'}>
      <Auth.Screen name={'splash'} component={Splash} />
      <Auth.Screen name={'login'} component={Login} />
      <Auth.Screen name={'otp'} component={Otp} />
    </Auth.Navigator>
  );
};

export {AuthStack};
