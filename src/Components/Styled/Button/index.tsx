import {
  TouchableOpacity,
  Text,
  TextProps as RNTextProps,
  ViewProps,
} from 'react-native';
import styled, {css} from 'styled-components/native';
import {suffixPx} from '../../../Utils/Helper';
import {
  ButtonVariants,
  TouchableVariants,
  ButtonTouchableProps,
  ButtonTextProps,
  TouchableProps,
} from './interfaces';
import {color} from '../../../Theme';
import {fonts} from '../../../Utils';

import {
  ShadowStyleIOS,
  TransformsStyle,
  FlexStyle,
  ViewStyle,
  BackgroundShadow,
} from '../Css';

import {
  ShadowStyleIOS as ShadowStyleIOSProps,
  TransformsStyle as TransformsStyleProps,
  FlexStyle as FlexStyleProps,
  ViewStyle as ViewStyleProps,
} from '../Css/interfaces';

const CatalinaBlueBg = `
  background-color: ${color.primaryButton};
`;

const getContainerBaseVariant = `
  border-radius: ${suffixPx(10)};
  margin-bottom: ${suffixPx(15)};
`;

const touchableButtonStyle = {
  primary: css`
    ${CatalinaBlueBg};
    padding-horizontal: ${suffixPx(20)};
    height: ${suffixPx(47)};
    border-radius: ${suffixPx(28)};
    z-index: 0;
  `,
  secondary: css`
    ${BackgroundShadow};
    border-width: ${suffixPx(1)};
    height: ${suffixPx(55)};
    padding-left: ${suffixPx(9)};
    padding-right: ${suffixPx(9)};
  `,
  medium: css`
    background-color:${color.smallButtonColor}
    border-width: ${suffixPx(1)};
    height: ${suffixPx(30)};
    padding-left: ${suffixPx(10)};
    padding-right: ${suffixPx(10)};
    border-radius: ${suffixPx(15)};

  `,
  default: css``,
  small: css``,
  cancel: css`
    border-width: ${suffixPx(1)};
    height: ${suffixPx(45)};
    background-color: ${color.black};
    padding-left: ${suffixPx(9)};
    padding-right: ${suffixPx(9)};
    border-radius: ${suffixPx(20)};
  `,
};

const touchableStyle = {
  'rounded-cart': css`
    position: absolute;
    right: ${suffixPx(-25)};
    top: ${suffixPx(-25)};
    background-color: ${color.primaryButton};
    width: ${suffixPx(50)};
    height: ${suffixPx(50)};
    border-radius: ${suffixPx(25)};
    align-items: center;
    justify-content: center;
  `,
  'order-selected': css`
    ${getContainerBaseVariant}
    background-color: ${color.white};
    height: ${suffixPx(60)};
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: ${suffixPx(10)};
  `,
  'order-default': css`
    ${getContainerBaseVariant}
    flex: 1;
    height: ${suffixPx(60)};
    align-items: center;
    justify-content: center;
  `,
  'model-btn': css`
    background-color: ${color.black};
    height: ${suffixPx(40)};
    border-radius: ${suffixPx(20)};
  `,
  'rounded-delete': css`
    background-color: ${color.ActionGrey};
    width: ${suffixPx(18)};
    height: ${suffixPx(18)};
    border-radius: ${suffixPx(9)};
    align-items: center;
    justify-content: center;
  `,
  'card-plan': css`
    ${getContainerBaseVariant}
    background-color: ${color.white};
    padding-horizontal: ${suffixPx(20)};
    padding-vertical: ${suffixPx(10)};
    align-items: center;
  `,
};

const getTouchableButtonVariant = (variant: ButtonVariants) =>
  touchableButtonStyle[variant];

const getTouchableVariant = (variant: TouchableVariants) =>
  touchableStyle[variant];

const textStyle = {
  primary: css`
    color: ${color.white};
    letter-spacing: ${suffixPx(2.5)};
    text-transform: uppercase;
    font-size: ${suffixPx(13)};
  `,
  secondary: css``,
  default: css``,
  small: css`
    color: ${color.black};
    font-family: ${fonts.medium};
    text-transform: uppercase;
    font-size: ${suffixPx(10)};
  `,
  cancel: css`
    color: ${color.white};
  `,
  medium: css`
    font-size: ${suffixPx(10)};
    font-family: ${fonts.light};
    letter-spacing: ${1};
  `,
};

const getTextVariant = (variant: ButtonVariants) => textStyle[variant];

export const Touchable = styled(TouchableOpacity) <
  TouchableProps &
  ViewProps &
  ShadowStyleIOSProps &
  TransformsStyleProps &
  FlexStyleProps &
  ViewStyleProps
>`
  ${({variant}) => variant && getTouchableVariant(variant)}
  ${ShadowStyleIOS}
  ${TransformsStyle}
  ${FlexStyle}
  ${ViewStyle}
`;

export const ButtonTouchable = styled(TouchableOpacity) <
  ButtonTouchableProps &
  ViewProps &
  ShadowStyleIOSProps &
  TransformsStyleProps &
  FlexStyleProps &
  ViewStyleProps
>`
  background-color: ${color.white};
  border-radius: ${suffixPx(5)};
  border-width: ${suffixPx(0)};
  border-color: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${({variant}) => variant && getTouchableButtonVariant(variant)}
  ${ShadowStyleIOS};
  ${TransformsStyle};
  ${FlexStyle};
  ${ViewStyle};
`;

export const ButtonText = styled(Text) <RNTextProps & ButtonTextProps>`
  color: ${color.davyGrey};
  font-family: ${fonts.book};
  text-align: center;
  ${({variant}) => variant && getTextVariant(variant)}
  ${props =>
    props?.['font-family'] && 'font-family: ' + props['font-family'] + ';'}
  ${props =>
    props?.['font-size'] && 'font-size: ' + suffixPx(props['font-size']) + ';'}
`;
