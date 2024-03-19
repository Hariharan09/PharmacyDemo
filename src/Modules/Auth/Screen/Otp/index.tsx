import {
  Button,
  Container,
  CustomInput,
  Header,
  Text,
  Toast,
  Touchable,
} from '../../../../Components';
import {useInput} from '../../../../Hooks';
import {
  AuthStackParamList,
  NAVIGATE_SCREEN,
  NAVIGATE_TAB,
  navigate,
} from '../../../../Navigators';
import {submitLoginOtp, userLoginDetails} from '../../../../Redux';
import {color} from '../../../../Theme';
import {OTP_RULES, getValidateError, validate} from '../../../../Utils';
import {StackScreenProps} from '@react-navigation/stack';
import {isEmpty} from 'lodash';
import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const Otp: FC<StackScreenProps<AuthStackParamList, 'otp'>> = ({}) => {
  const {registeredMobileNumber, validateUser} = useSelector(
    (state: any) => state.AuthReducer,
  );

  const {loginDetails} = useSelector((state: any) => state.AppReducer);

  const dispatch = useDispatch();

  const [seconds, setSeconds] = useState<number>(59);
  const otp = useInput('');
  const otpResendApiHandler = () => {
    setSeconds(59);
  };

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const otpRegisterApiHandler = () => {
    const params = {
      phone : registeredMobileNumber.value,
      code: otp.value,
    };

    const validation = validate(OTP_RULES, params);
    if (isEmpty(validation)) {
      if (validateUser?.success) {
        dispatch(
          submitLoginOtp({
            params,
            onSuccess: (response: any) => () => {
              dispatch(
                userLoginDetails({
                  ...loginDetails,
                  isLoggedIn: true,
                }),
              );
              // navigate(NAVIGATE_SCREEN.splash, true);
              navigate(NAVIGATE_TAB['home-tab'], true);
            },
            onError: () => () => {
              // navigate(NAVIGATE_SCREEN.splash, true);
              navigate(NAVIGATE_TAB['home-tab'], true);

            },
          }),
        );
      }
    } else {
      Toast(getValidateError(validation));
    }
  };

  return (
    <>
      <Header heading={'OTP Verification'} />
      <Container flex-jc={'center'} variant={'screen'}>
        <Container flex-ai={'center'}>
          <Container
            margin-v={30}
            padding-h={20}
            flex-jc={'center'}
            flex-ai={'center'}
            flex-d={'row'}>
            <CustomInput
              type={'numeric'}
              variant={'otp-input'}
              placeholder={'0000'}
              maxLength={4}
              value={otp.value}
              onChangeText={otp.onChange}
            />
          </Container>

          <Text padding={10} variant={'bold'} color={color.lightGrey}>
            {'Verification Code'}
          </Text>

          {seconds === 0 ? (
            <Touchable
              accessibilityRole="button"
              onPress={() => otpResendApiHandler()}>
              <Text variant={'screen-heading'} color={color.primaryButton}>
                {'Resend'}
              </Text>
            </Touchable>
          ) : (
            <Text variant={'bold'} font-size={14} color={color.primaryButton}>
              {'00:' + (seconds < 10 ? '0' + seconds : seconds)}
            </Text>
          )}
        </Container>
        <Container padding={20}>
          <Button
            variant={'primary'}
            text={'Verify'}
            onPress={otpRegisterApiHandler}
          />
        </Container>
      </Container>
    </>
  );
};
