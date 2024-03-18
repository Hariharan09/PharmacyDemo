import {icons} from '@Assets';
import {Container, ImageView, Text} from '@Components';
import {translate} from '@I18n';
import {AuthStackParamList, NAVIGATE_SCREEN, navigate} from '@Navigators';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {useSelector} from 'react-redux';

export const Splash: FC<
  StackScreenProps<AuthStackParamList, 'splash'>
> = () => {
  const {loginDetails} = useSelector((state: any) => state.AppReducer);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate(NAVIGATE_SCREEN.login, true);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      if (loginDetails?.isLoggedIn) {
        navigate(NAVIGATE_SCREEN['home-stack'], true);
      } else {
        navigate(NAVIGATE_SCREEN.login, true);
      }
    }, 3000);
  }, []);

  return (
    <>
      <Container variant={'screen-gray'} flex-jc={'center'} flex-ai={'center'}>
        <ImageView source={icons.logo} h={100} w={120} />
        <Text
          font-size={23}
          variant={'light'}
          margin-b={6}
          letter-s={1}
          margin-t={10}>
          {'Demo Pharmacy'}
        </Text>
      </Container>
    </>
  );
};
