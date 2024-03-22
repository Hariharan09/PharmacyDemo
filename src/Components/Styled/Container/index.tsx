import {View, ViewProps} from 'react-native';
import styled, {css} from 'styled-components/native';
import {ContainerProps, Variants} from './interfaces';

import {ShadowStyleIOS, TransformsStyle, FlexStyle, ViewStyle} from '../Css';

import {
  ShadowStyleIOS as ShadowStyleIOSProps,
  TransformsStyle as TransformsStyleProps,
  FlexStyle as FlexStyleProps,
  ViewStyle as ViewStyleProps,
} from '../Css/interfaces';
import {color} from '../../../Theme';
import {suffixPx} from '../../../Utils';

const getContainerBaseVariant = `
  border-radius: ${suffixPx(10)};
  margin-bottom: ${suffixPx(15)};
`;

const dropdownbaseCss = `
  border-radius: ${suffixPx(20)};
  height: ${suffixPx(40)};
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${suffixPx(20)};
  margin-bottom: ${suffixPx(30)};
`;

const containerStyle = {
  divider: css`
    border-color: ${color.ActionGrey};
    border-width: ${suffixPx(0.5)};
  `,
  'divider-v': css`
    border-color: ${color.line};
    border-left-width: ${suffixPx(1)};
    height: ${suffixPx(20)};
  `,
  card: css`
    ${getContainerBaseVariant}
    /* background-color: ${color.white}; */
    /* width: ${suffixPx(100)};
    padding: ${suffixPx(10)}; */
    padding-vertical: ${suffixPx(30)};
    padding-horizontal: ${suffixPx(20)};
    border: ${suffixPx(2)};
    border-color: ${color.ActionGrey};
  `,
  'small-card': css`
    ${getContainerBaseVariant}
    background-color: ${color.white};
    height: ${suffixPx(100)};
    width: ${suffixPx(100)};
    border-color: ${color.offWhite};
    border-radius: ${suffixPx(20)};
  `,
    'medium-card': css`
    ${getContainerBaseVariant}
    height: ${suffixPx(180)};
    width: ${suffixPx(180)};
    border-radius: ${suffixPx(20)};
  `,
  'card-search': css`
    ${getContainerBaseVariant}
    background-color: ${color.white};
    justify-content: center;
    align-items: center;
    height: ${suffixPx(50)};
    border-radius: ${suffixPx(5)};
  `,
  'rounded-cart': css`
    background-color: ${color.primaryButton};
    width: ${suffixPx(50)};
    height: ${suffixPx(50)};
    border-radius: ${suffixPx(25)};
  `,

  'rounded-cart-count': css`
    background-color: ${color.angry};
    width: ${suffixPx(15)};
    height: ${suffixPx(15)};
    border-radius: ${suffixPx(7.5)};
  `,
  'dropdown-item': css`
    ${getContainerBaseVariant}
    position: absolute;
    background-color: ${color.white};
  `,
  'rounded-icon': css`
    ${getContainerBaseVariant}
    width: ${suffixPx(25)};
    height: ${suffixPx(25)};
    border-radius: ${suffixPx(15)};
    background-color: ${color.greyMiddle};
    margin: ${suffixPx(5)};
    justify-content: center;
    align-items: center;
  `,

  'rounded-notify': css`
    background-color: ${color.white};
    width: ${suffixPx(35)};
    height: ${suffixPx(35)};
    border-radius: ${suffixPx(10)};
    align-items: center;
    justify-content: center;
    border: ${suffixPx(2)};
    border-color: ${color.ActionGrey};
  `,
  'square-location': css`
    background-color: ${color.shadowBlue};
    width: ${suffixPx(35)};
    height: ${suffixPx(35)};
    border-radius: ${suffixPx(5)};
    align-items: center;
    justify-content: center;
  `,

  'square-cart': css`
    background-color: ${color.ActionGrey};
    width: ${suffixPx(35)};
    height: ${suffixPx(35)};
    border-radius: ${suffixPx(5)};
    align-items: center;
    justify-content: center;
  `,

  'rounded-camera': css`
    ${getContainerBaseVariant}
    width: ${suffixPx(70)};
    height: ${suffixPx(70)};
    border-radius: ${suffixPx(35)};
    background-color: ${color.greyMiddle};
    margin: ${suffixPx(5)};
    justify-content: center;
    align-items: center;
  `,
  dropdown: css`
    ${dropdownbaseCss}
    background-color: ${color.ActionGrey};
    justify-content: space-between;
  `,
  'tool-bar': css`
    height: ${suffixPx(50)};
    background-color: ${color.primary};
  `,
  add: css`
    margin-top: ${suffixPx(10)};
    margin-right: ${suffixPx(20)};
    padding-vertical: ${suffixPx(15)};
    padding-horizontal-: ${suffixPx(35)};
    border-radius: ${suffixPx(50)};
    align-self: baseline;
  `,
  select: css`
    padding-vertical: ${suffixPx(15)};
    padding-horizontal-: ${suffixPx(15)};
    border-radius: ${suffixPx(5)};
    background-color: ${color.greyMiddle};
    align-self: baseline;
    border-radius: ${suffixPx(50)};
    border-color: ${color.black};
    border-width: ${suffixPx(1)};
  `,

  tag: css`
    padding-vertical: ${suffixPx(7)};
    padding-horizontal-: ${suffixPx(15)};
    border-radius: ${suffixPx(15)};
    background-color: ${color.greyMiddle};
    align-self: baseline;
  `,
  screen: css`
    flex: 1;
    background-color: ${color.white};
  `,
  'screen-gray': css`
    flex: 1;
    background-color: ${color.ActionGrey};
    padding-horizontal: ${suffixPx(20)};
    padding-vertical: ${suffixPx(20)};
  `,
  'card-service': css`
    ${getContainerBaseVariant}
    background-color: ${color.white};
    padding-horizontal: ${suffixPx(20)};
    padding-vertical: ${suffixPx(30)};
  `,
  // 'card-issue': css`
  //   ${getContainerBaseVariant}
  //   background-color: ${color.white};
  //   padding-horizontal: ${suffixPx(20)};
  //   padding-vertical: ${suffixPx(10)};
  //   align-items: center;
  // `,
  'bottom-tab': css`
    height: ${suffixPx(70)};
    border-radius: ${suffixPx(15)};
    position: absolute;
    left: 0;
    right: 0;
    bottom: ${suffixPx(20)};
    background-color: ${color.secondary};
    flex-direction: row;
    justify-content: space-between;
    margin-horizontal: ${suffixPx(30)};
  `,
  'rounded-camera-bg': css`
    width: ${suffixPx(70)};
    height: ${suffixPx(70)};
    border-radius: ${suffixPx(35)};
    background-color: ${color.greyMiddle};
  `,
  edit: css`
    margin-right: ${suffixPx(20)};
    padding-vertical: ${suffixPx(10)};
    padding-horizontal-: ${suffixPx(35)};
    border-radius: ${suffixPx(50)};
    background-color: ${color.black};
    align-self: baseline;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `,
  'grey-dropdown': css`
    background-color: ${color.greyMiddle};
    border-radius: ${suffixPx(20)};
    margin-bottom: ${suffixPx(30)};
  `,
  'image-picker': css`
    background-color: ${color.greyMiddle};
    height: ${suffixPx(100)};
    width: ${suffixPx(100)}
    border-radius: ${suffixPx(20)};
    justify-content: center;
    align-items: center;
    overflow: hidden
  `,
  grey: css`
    background-color: ${color.ActionGrey};
    border-radius: ${suffixPx(20)};
    margin-bottom: ${suffixPx(30)};
  `,
};

const getContainerVariant = (variant: Variants) => containerStyle[variant];

const Container = styled(View)<
  ViewProps &
    ShadowStyleIOSProps &
    TransformsStyleProps &
    FlexStyleProps &
    ViewStyleProps &
    ContainerProps
>`
  ${props => props.variant && getContainerVariant(props.variant)}
  ${ShadowStyleIOS}
  ${TransformsStyle}
  ${FlexStyle}
  ${ViewStyle}
`;

export {Container};
