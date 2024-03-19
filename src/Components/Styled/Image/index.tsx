/* eslint-disable prettier/prettier */
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  ImageBackground as RNImageBackground,
  ImageBackgroundProps as RNImageBackgroundProps,
} from 'react-native';
import styled, {css} from 'styled-components/native';
import {ImageProps, Variants} from './interfaces';

import {
  ShadowStyleIOS,
  TransformsStyle,
  FlexStyle,
  ImageStyle,
  ViewStyle,
} from '../Css';

import {
  ShadowStyleIOS as ShadowStyleIOSProps,
  TransformsStyle as TransformsStyleProp,
  FlexStyle as FlexStyleProps,
  ImageStyle as ImageStyleProps,
  ViewStyle as ViewStyleProps,
} from '../Css/interfaces';
import {suffixPx} from '../../../Utils';
import {color} from '../../../Theme';


const variantStyle = {
  'rounded-item': css`
  width: ${suffixPx(100)};
  height: ${suffixPx(100)};
  overflow: hidden;
  border-width:${suffixPx(1)};
  border-radius: ${suffixPx(50)};
  border-color: ${color.white};
  `,
  'gallery-item': css`
  width: ${suffixPx(110)};
  height: ${suffixPx(110)};
  border-width:${suffixPx(1)};
  overflow: hidden;
  border-color: ${color.white};
  `,
  'rounded-icon': css`
  width: ${suffixPx(45)};
  height: ${suffixPx(45)};
  overflow: hidden;
  border-radius: ${suffixPx(45)};
  `
  ,
};

const getContainerVariant = (variant: Variants) => variantStyle[variant];

const Image = styled(RNImage) <
  RNImageProps &
  ShadowStyleIOSProps &
  TransformsStyleProp &
  FlexStyleProps &
  ImageStyleProps &
  ImageProps
>`
${props => props.variant && getContainerVariant(props.variant)}
  ${ShadowStyleIOS}
  ${TransformsStyle}
  ${FlexStyle}
  ${ImageStyle}
  ${ImageStyle}
`;

export const ImageBackground = styled(RNImageBackground) <
  RNImageProps &
  ShadowStyleIOSProps &
  TransformsStyleProp &
  FlexStyleProps &
  ImageStyleProps &
  ViewStyleProps &
  RNImageBackgroundProps
>`
  ${ShadowStyleIOS}
  ${TransformsStyle}
  ${FlexStyle}
  ${ImageStyle}
  ${ViewStyle}
`;

export {Image};
