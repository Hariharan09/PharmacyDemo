import {ScrollView as View, ScrollViewProps} from 'react-native';
import styled from 'styled-components/native';
import {ScrollProps} from './interfaces';

import {ShadowStyleIOS, TransformsStyle, FlexStyle, ViewStyle} from '../Css';

import {
  ShadowStyleIOS as ShadowStyleIOSProps,
  TransformsStyle as TransformsStyleProps,
  FlexStyle as FlexStyleProps,
  ViewStyle as ViewStyleProps,
} from '../Css/interfaces';

const ScrollView = styled(View)<
  ScrollViewProps &
    ShadowStyleIOSProps &
    TransformsStyleProps &
    FlexStyleProps &
    ViewStyleProps &
    ScrollProps
>`
  ${ShadowStyleIOS}
  ${TransformsStyle}
  ${FlexStyle}
  ${ViewStyle}
`;

export {ScrollView};
