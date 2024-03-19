import {SafeAreaView as View} from 'react-native';
import styled from 'styled-components/native';

import {ShadowStyleIOS, TransformsStyle, FlexStyle, ViewStyle} from '../Css';

import {
  ShadowStyleIOS as ShadowStyleIOSProps,
  TransformsStyle as TransformsStyleProps,
  FlexStyle as FlexStyleProps,
  ViewStyle as ViewStyleProps,
} from '../Css/interfaces';
import {SafeAreaViewProps} from './interfaces';

const SafeAreaView = styled(View)<
  ShadowStyleIOSProps &
    TransformsStyleProps &
    FlexStyleProps &
    ViewStyleProps &
    SafeAreaViewProps
>`
  ${ShadowStyleIOS}
  ${TransformsStyle} 
  ${FlexStyle}
  ${ViewStyle};
`;

export {SafeAreaView};
