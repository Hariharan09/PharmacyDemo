import {FlatListProps, FlatList as RNFlatList} from 'react-native';
import styled from 'styled-components/native';
import {ViewStyle, FlexStyle, FlatListStyle} from '../Css';

import {
  ViewStyle as ViewStyleProps,
  FlexStyle as FlexStyleProps,
} from '../Css/interfaces';

const FlatList = styled(RNFlatList)<
  ViewStyleProps & FlexStyleProps & FlatListProps<any>
>`
  ${ViewStyle}
  ${FlexStyle}
  ${FlatListStyle}
`;

export {FlatList};
