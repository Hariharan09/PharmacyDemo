import {TextInput, TextInputProps} from 'react-native';
import styled, {css} from 'styled-components/native';

import {fonts, suffixPx} from '../../../Utils';
import {InputProps, Variants} from './interfaces';

import {
  TextStyleIOS,
  TextStyleAndroid,
  TextStyle,
  ViewStyle,
  FlexStyle,
} from '../Css';

import {
  TextStyleIOS as TextStyleIOSProps,
  TextStyleAndroid as TextStyleAndroidProps,
  TextStyle as TextStyleProps,
  ViewStyle as ViewStyleProps,
  FlexStyle as FlexStyleProps,
} from '../Css/interfaces';
import {color} from '../../../Theme';

const inputBaseCss = `
padding-horizontal: ${suffixPx(20)};
font-size: ${suffixPx(14)};
color: ${color.black};
font-family: ${fonts.book};
letter-spacing: ${suffixPx(1.5)};
`;

const inputVariant = {
  default: css`
    ${inputBaseCss}
  `,
  grey: css`
    ${inputBaseCss}
    background-color: ${color.ActionGrey};
    height: ${suffixPx(40)};
    border-radius: ${suffixPx(20)};
    margin-bottom: ${suffixPx(30)};
  `,
  white: css`
    ${inputBaseCss}
    background-color: ${color.white};
    height: ${suffixPx(41)};
    border-radius: ${suffixPx(20)};
    margin-left: ${suffixPx(10)};
  `,
  otp: css`
    height: ${suffixPx(60)};
    width: ${suffixPx(60)};
    border-radius: ${suffixPx(10)};
    background-color: ${color.greyMiddle};
    text-align: center;
    font-family: ${fonts.bold};
    font-size: ${suffixPx(18)};
    justify-content: center;
    align-items: center;
  `,
  'otp-input': css`
    width: 100%;
    height: ${suffixPx(50)};
    border-radius: ${suffixPx(20)};
    background-color: ${color.white};
    text-align: center;
    font-family: ${fonts.bold};
    font-size: ${suffixPx(18)};
    justify-content: center;
    align-items: center;
  `,
  'text-area': css`
    ${inputBaseCss}
    background-color: ${color.greyMiddle};
    border-radius: ${suffixPx(20)};
    margin-bottom: ${suffixPx(30)};
  `,
};

const getInputVariant = (variant: Variants) => inputVariant[variant];

const Input = styled(TextInput)<
  TextInputProps &
    TextStyleIOSProps &
    TextStyleAndroidProps &
    TextStyleProps &
    ViewStyleProps &
    FlexStyleProps &
    InputProps
>`
  ${({variant}) => variant && getInputVariant(variant)}
  ${TextStyleIOS}
  ${TextStyleAndroid}
  ${TextStyle}
  ${ViewStyle}
  ${FlexStyle}
`;

export {Input};
