import {
  ShadowStyleIOS as ShadowStyleIOSProps,
  TransformsStyle as TransformsStyleProp,
  FlexStyle as FlexStyleProps,
  ImageStyle as ImageStyleProps,
  ViewStyle as ViewStyleProps,
} from '../../Styled/Css/interfaces';
import {Variants} from '../../Styled/Image/interfaces';
export interface ImageViewProps
  extends ShadowStyleIOSProps,
    TransformsStyleProp,
    FlexStyleProps,
    ImageStyleProps,
    ViewStyleProps {
  variant?: Variants;
  source: any;
  isUri?: boolean;
}
