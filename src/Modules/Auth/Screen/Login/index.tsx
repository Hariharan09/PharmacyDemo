import {icons} from '../../../../Assets';
import {
  Toast,
  Button,
  Container,
  CustomInput,
  ImageView,
  Text,
  Modal,
} from '../../../../Components';
import {useInput} from '../../../../Hooks';
import {
  AuthStackParamList,
  NAVIGATE_SCREEN,
  navigate,
} from '../../../../Navigators';
import {setRegisteredMobileNumber, validateUser} from '../../../../Redux';
import {color} from '../../../../Theme';
import {CUSTOMER, getValidateError, MOBILE_NUMBER_RULES, validate} from '../../../../Utils';
import {StackScreenProps} from '@react-navigation/stack';
import {isEmpty} from 'lodash';
import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';

export const Login: FC<
  StackScreenProps<AuthStackParamList, 'login'>
> = ({}) => {
  const dispatch = useDispatch();
  const mobileNumber = useInput('');
  const name = useInput('');
  const validateUserBusinessApiHandler = () => {
    const params = {
      phone: mobileNumber.value,
      name: name.value,
    };
   


    const validation = validate(MOBILE_NUMBER_RULES, params);

    if (isEmpty(validation)) {
            // navigate(NAVIGATE_SCREEN.otp);

      dispatch(
        validateUser({
          params,
          onSuccess: () => () => {
            dispatch(setRegisteredMobileNumber(mobileNumber));
            navigate(NAVIGATE_SCREEN.otp);
          },
          onError: () => () => {
            navigate(NAVIGATE_SCREEN.otp);
          },
        }),
      );
    } else {
      Toast(getValidateError(validation));
    }
  };

  return (
    <>
      <Container flex-jc={'center'} variant={'screen-gray'}>
        <Container bc={color.white} border-r={10} padding-v={15}>
          <Container flex-ai={'center'} flex-jc={'center'} margin-t={20}>
            <ImageView source={icons.logo} h={80} w={100} />
          </Container>
          <Container flex-ai={'center'} flex-jc={'center'} margin-t={20}>
            <Text font-size={22} variant={'light'} margin-b={3} letter-s={1}>
              {'Demo Pharmacy'}
            </Text>
            <Text font-size={12} variant={'light'} margin-t={5}>
              {'Its just an wonderful App'}
            </Text>
          </Container>
          <Container margin-h={30} margin-t={60} margin-b={10}>
            <CustomInput
              type={'numeric'}
              heading={'Mobile Number'}
              placeholder={'00000 00000'}
              maxLength={10}
              onChangeText={mobileNumber.onChange}
            />
            <CustomInput
              type={'default'}
              heading={'Name'}
              onChangeText={name.onChange}
            />
          </Container>
        </Container>
        <Container padding-t={20}>
          <Button
            variant={'primary'}
            text={'submit'}
            onPress={validateUserBusinessApiHandler}
          />
        </Container>
      </Container>
    </>
  );
};
