import {
  FlexAlignType,
  PerpectiveTransform,
  RotateTransform,
  RotateXTransform,
  RotateYTransform,
  RotateZTransform,
  ScaleTransform,
  ScaleXTransform,
  ScaleYTransform,
  TranslateXTransform,
  TranslateYTransform,
  SkewXTransform,
  SkewYTransform,
  MatrixTransform,
  ImageResizeMode,
  FontVariant,
  TextInputProps,
  ListRenderItem,
} from 'react-native';

type vars =
  | 'backface-v'
  | 'border-tlr'
  | 'border-trr'
  | 'border-blr'
  | 'border-brr';

export interface VarsProps {
  [key: string]: vars;
}

export interface ShadowStyleIOS {
  'shadow-c'?: string | undefined;
  'shadow-of'?: {width: number; height: number} | undefined;
  'shadow-op'?: number | undefined;
  'shadow-r'?: number | undefined;
}

export type transformProps = (
  | PerpectiveTransform
  | RotateTransform
  | RotateXTransform
  | RotateYTransform
  | RotateZTransform
  | ScaleTransform
  | ScaleXTransform
  | ScaleYTransform
  | TranslateXTransform
  | TranslateYTransform
  | SkewXTransform
  | SkewYTransform
  | MatrixTransform
)[];

export interface TransformsStyle {
  transform?: transformProps | undefined;
}

export interface FlexStyle {
  'flex-ac'?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | undefined;
  'flex-ai'?: FlexAlignType | undefined;
  'flex-as'?: 'auto' | FlexAlignType | undefined;
  'flex-ar'?: number | undefined;
  'border-bw'?: number | undefined;
  'border-ew'?: number | string | undefined;
  'border-lw'?: number | undefined;
  'border-rw'?: number | undefined;
  'border-sw'?: number | string | undefined;
  'border-tw'?: number | undefined;
  bottom?: number | string | undefined;
  display?: 'none' | 'flex' | undefined;
  end?: number | string | undefined;
  flex?: number | undefined;
  'flex-b'?: number | string | undefined;
  'flex-d'?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
  'flex-g'?: number | undefined;
  'flex-s'?: number | undefined;
  'flex-w'?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  h?: number | string | undefined;
  'flex-jc'?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  left?: number | string | undefined;
  margin?: number | string | undefined;
  'margin-b'?: number | string | undefined;
  'margin-e'?: number | string | undefined;
  'margin-h'?: number | string | undefined;
  'margin-l'?: number | string | undefined;
  'margin-r'?: number | string | undefined;
  'margin-s'?: number | string | undefined;
  'margin-t'?: number | string | undefined;
  'margin-v'?: number | string | undefined;
  'max-h'?: number | string | undefined;
  'max-w'?: number | string | undefined;
  'min-h'?: number | string | undefined;
  'min-w'?: number | string | undefined;
  overflow?: 'visible' | 'hidden' | 'scroll' | undefined;
  padding?: number | string | undefined;
  'padding-b'?: number | string | undefined;
  'padding-e'?: number | string | undefined;
  'padding-h'?: number | string | undefined;
  'padding-l'?: number | string | undefined;
  'padding-r'?: number | string | undefined;
  'padding-s'?: number | string | undefined;
  'padding-t'?: number | string | undefined;
  'padding-v'?: number | string | undefined;
  position?: 'absolute' | 'relative' | undefined;
  right?: number | string | undefined;
  start?: number | string | undefined;
  top?: number | string | undefined;
  w?: number | string | undefined;
  'z-index'?: number | undefined;
}

export interface ViewStyle {
  'backface-v'?: 'visible' | 'hidden' | undefined;
  bc?: string | undefined;
  'border-bc'?: string | undefined;
  'border-ber'?: number | undefined;
  'border-blr'?: number | undefined;
  'border-brr'?: number | undefined;
  'border-bsr'?: number | undefined;
  'border-c'?: string | undefined;
  'border-ec'?: string | undefined;
  'border-lc'?: string | undefined;
  'border-r'?: number | undefined;
  'border-rc'?: string | undefined;
  'border-sc'?: string | undefined;
  'border-s'?: 'solid' | 'dotted' | 'dashed' | undefined;
  'border-tc'?: string | undefined;
  'border-ter'?: number | undefined;
  'border-tlr'?: number | undefined;
  'border-trr'?: number | undefined;
  'border-tsr'?: number | undefined;
  'border-w'?: number | undefined;
  opacity?: number | undefined;
  elevation?: number | undefined;
}

export interface ImageStyle {
  'resize-m'?: ImageResizeMode | undefined;
  'backface-v'?: 'visible' | 'hidden' | undefined;
  'border-blr'?: number | undefined;
  'border-brr'?: number | undefined;
  'background-c'?: string | undefined;
  'border-c'?: string | undefined;
  'border-w'?: number | undefined;
  'border-r'?: number | undefined;
  'border-tlr'?: number | undefined;
  'border-trr'?: number | undefined;
  'overflow-f'?: 'visible' | 'hidden' | undefined;
  'overlay-c'?: string | undefined;
  'tint-c'?: string | undefined;
  opacity?: number | undefined;
}

export interface TextStyleIOS {
  'font-v'?: FontVariant[] | undefined;
  'letter-s'?: number | undefined;
  'text-dc'?: string | undefined;
  'text-ds'?: 'solid' | 'double' | 'dotted' | 'dashed' | undefined;
  'writing-d'?: 'auto' | 'ltr' | 'rtl' | undefined;
}

export interface TextStyleAndroid {
  'text-av'?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  'include-fp'?: boolean | undefined;
}

export interface TextStyle {
  color?: string | undefined;
  'font-family'?: string | undefined;
  'font-size'?: number | undefined;
  'font-style'?: 'normal' | 'italic' | undefined;
  'font-weight'?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  'line-h'?: number | undefined;
  'text-a'?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  'text-dl'?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined;
  'text-sc'?: string | undefined;
  'text-so'?: {width: number; height: number} | undefined;
  'text-sr'?: number | undefined;
  'text-t'?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  'letter-s'?: number | undefined;
}

export interface FlatListProps {
  data: ReadonlyArray<any> | null | undefined;
  extraData?: any;
  horizontal?: boolean | null | undefined;
  keyExtractor?: ((item: any, index: number) => string) | undefined;
  numColumns?: number | undefined;
  onEndReached?: ((info: {distanceFromEnd: number}) => void) | null | undefined;
  onEndReachedThreshold?: number | null | undefined;
  onRefresh?: (() => void) | null | undefined;
  refreshing?: boolean | null | undefined;
  renderItem: ListRenderItem<any> | null | undefined;
  scrollEnabled?: boolean | undefined;
}
