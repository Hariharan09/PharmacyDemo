/* eslint-disable prettier/prettier */
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import styled, {css} from 'styled-components/native';
import {TextProps, Variants} from './interfaces';

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
import {suffixPx} from '../../../Utils/Helper';
import {fonts} from '../../../Utils';
import {color} from '../../../Theme';

const defaultCss = `
  color: ${color.black}
`;

const variantStyle = {
  bold: css`
    ${defaultCss}
    font-family: ${fonts.bold};
  `,
  'bold-italic': css`
    ${defaultCss}
    font-family: ${fonts.boldItalic};
  `,
  medium: css`
    ${defaultCss}
    font-family: ${fonts.medium};
  `,
  'medium-italic': css`
    ${defaultCss}
    font-family: ${fonts.mediumItalic};
  `,
  light: css`
    ${defaultCss}
    font-family: ${fonts.light};
  `,
  'light-italic': css`
    ${defaultCss}
    font-family: ${fonts.lightItalic};
  `,
  book: css`
    ${defaultCss}
    font-family: ${fonts.book};
  `,
  'book-italic': css`
  ${defaultCss}
  font-family: ${fonts.bookItalic};
`,

  heading: css`
    ${defaultCss}
    font-family: ${fonts.bold};
    font-size: ${suffixPx(16)};
    text-transform: uppercase;
    letter-spacing: ${suffixPx(1.5)};
  `,
  'sub-heading': css`
    ${defaultCss}
    font-family: ${fonts.book};
    font-size: ${suffixPx(10)};
    
  `,
  'input-heading': css`
    ${defaultCss}
    font-family: ${fonts.light};
    font-size: ${suffixPx(10)};
    letter-spacing: ${suffixPx(1.5)};
    text-transform: uppercase;
  `,
  'screen-heading': css`
    ${defaultCss}
    font-family: ${fonts.bold};
    font-size: ${suffixPx(12)};
    text-transform: uppercase;
  `,
  'screen-description': css`
    ${defaultCss}
    font-family: ${fonts.medium};
    font-size: ${suffixPx(12)};
  `,
  'toolbar-heading': css`
    ${defaultCss}
    font-family: ${fonts.medium};
    font-size: ${suffixPx(14)};
    text-transform: lowercase;
    letter-spacing: ${suffixPx(2)};
  `,
};

const getContainerVariant = (variant: Variants) => variantStyle[variant];

const Text = styled(RNText)<
  RNTextProps &
    TextStyleIOSProps &
    TextStyleAndroidProps &
    TextStyleProps &
    ViewStyleProps &
    FlexStyleProps &
    TextProps
>`
  ${props => props.variant && getContainerVariant(props.variant)}
  ${TextStyleIOS}
  ${TextStyleAndroid}
  ${TextStyle}
  ${ViewStyle}
  ${FlexStyle}
`;

export {Text};
