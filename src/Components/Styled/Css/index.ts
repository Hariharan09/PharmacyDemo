import {css} from 'styled-components/native';
import {
  ShadowStyleIOS as ShadowStyleIOSProps,
  TransformsStyle as TransformsStyleProps,
  FlexStyle as FlexStyleProps,
  ViewStyle as ViewStyleProps,
  ImageStyle as ImageStyleProps,
  VarsProps,
  TextStyleIOS as TextStyleIOSProps,
  TextStyleAndroid as TextStyleAndroidProps,
  TextStyle as TextStyleProps,
  FlatListProps,
} from './interfaces';

import {suffixPx, parseTransformCss} from '../../../Utils';
import {color} from '../../../Theme';

// values that are used multile places
const vars: VarsProps = {
  backfaceV: 'backface-v',
  borderTLR: 'border-tlr',
  borderTrr: 'border-trr',
  borderBlr: 'border-blr',
  borderBrr: 'border-brr',
};

export const ShadowStyleIOS = css<ShadowStyleIOSProps>`
  ${props => props?.['shadow-c'] && 'shadow-color: ' + props['shadow-c'] + ';'}
  ${props =>
    props?.['shadow-of'] &&
    'shadow-offset: ' +
      suffixPx(props['shadow-of'].width) +
      ' ' +
      suffixPx(props['shadow-of'].height) +
      ';'}
  ${props =>
    props?.['shadow-op'] && 'shadow-opacity: ' + props['shadow-op'] + ';'}
  ${props => props?.['shadow-r'] && 'shadow-radius: ' + props['shadow-r'] + ';'}
`;

export const TransformsStyle = css<TransformsStyleProps>`
  ${props =>
    props?.transform &&
    'transform: ' + parseTransformCss(props.transform) + ';'}
`;

export const FlexStyle = css<FlexStyleProps>`
  ${props => props?.['flex-ac'] && 'align-content: ' + props['flex-ac'] + ';'}
  ${props => props?.['flex-ai'] && 'align-items: ' + props['flex-ai'] + ';'}
  ${props => props?.['flex-as'] && 'align-self: ' + props['flex-as'] + ';'}
  ${props => props?.['flex-ar'] && 'aspect-ratio: ' + props['flex-ar'] + ';'}
  ${props =>
    props?.['border-bw'] &&
    'border-bottom-width: ' + suffixPx(props['border-bw']) + ';'}
  ${props =>
    props?.['border-ew'] &&
    'border-end-width: ' + suffixPx(props['border-ew']) + ';'}
  ${props =>
    props?.['border-lw'] &&
    'border-left-width: ' + suffixPx(props['border-lw']) + ';'}
  ${props =>
    props?.['border-rw'] &&
    'border-right-width: ' + suffixPx(props['border-rw']) + ';'}
  ${props =>
    props?.['border-sw'] &&
    'border-start-width: ' + suffixPx(props['border-sw']) + ';'}
  ${props =>
    props?.['border-tw'] &&
    'border-top-width: ' + suffixPx(props['border-tw']) + ';'}
  ${props => props?.bottom && 'bottom: ' + suffixPx(props.bottom) + ';'}
  ${props => props?.display && 'display: ' + props.display + ';'}
  ${props => props?.end && 'end: ' + suffixPx(props.end) + ';'}
  ${props => props?.flex && 'flex: ' + suffixPx(props.flex) + ';'}
  ${props =>
    props?.['flex-b'] && 'flex-basis: ' + suffixPx(props['flex-b']) + ';'}
  ${props => props?.['flex-d'] && 'flex-direction: ' + props['flex-d'] + ';'}
  ${props => props?.['flex-g'] && 'flex-grow: ' + props['flex-g'] + ';'}
  ${props => props?.['flex-s'] && 'flex-shrink: ' + props['flex-s'] + ';'}
  ${props => props?.['flex-w'] && 'flex-wrap: ' + props['flex-w'] + ';'}
  ${props => props?.h && 'height: ' + suffixPx(props.h) + ';'}
  ${props => props?.['flex-jc'] && 'justify-content: ' + props['flex-jc'] + ';'}
  ${props => props?.left && 'left: ' + suffixPx(props.left) + ';'}
  ${props => props?.margin && 'margin: ' + suffixPx(props.margin) + ';'}
  ${props =>
    props?.['margin-b'] &&
    'margin-bottom: ' + suffixPx(props['margin-b']) + ';'}
  ${props =>
    props?.['margin-e'] && 'margin-end: ' + suffixPx(props['margin-e']) + ';'}
  ${props =>
    props?.['margin-h'] &&
    'margin-horizontal: ' + suffixPx(props['margin-h']) + ';'}
  ${props =>
    props?.['margin-l'] && 'margin-left: ' + suffixPx(props['margin-l']) + ';'}
  ${props =>
    props?.['margin-r'] && 'margin-right: ' + suffixPx(props['margin-r']) + ';'}
  ${props =>
    props?.['margin-s'] && 'margin-start: ' + suffixPx(props['margin-s']) + ';'}
  ${props =>
    props?.['margin-t'] && 'margin-top: ' + suffixPx(props['margin-t']) + ';'}
  ${props =>
    props?.['margin-v'] &&
    'margin-vertical: ' + suffixPx(props['margin-v']) + ';'}
  ${props =>
    props?.['max-h'] && 'max-height: ' + suffixPx(props['max-h']) + ';'}
  ${props => props?.['max-w'] && 'max-width: ' + suffixPx(props['max-w']) + ';'}
  ${props =>
    props?.['min-h'] && 'min-height: ' + suffixPx(props['min-h']) + ';'}
  ${props => props?.['min-w'] && 'min-width: ' + suffixPx(props['min-w']) + ';'}
  ${props => props?.overflow && 'overflow: ' + props.overflow + ';'}
  ${props => props?.padding && 'padding: ' + suffixPx(props.padding) + ';'}
  ${props =>
    props?.['padding-b'] &&
    'padding-bottom: ' + suffixPx(props['padding-b']) + ';'}
  ${props =>
    props?.['padding-e'] &&
    'padding-end: ' + suffixPx(props['padding-e']) + ';'}
  ${props =>
    props?.['padding-h'] &&
    'padding-horizontal: ' + suffixPx(props['padding-h']) + ';'}
  ${props =>
    props?.['padding-l'] &&
    'padding-left: ' + suffixPx(props['padding-l']) + ';'}
  ${props =>
    props?.['padding-r'] &&
    'padding-right: ' + suffixPx(props['padding-r']) + ';'}
  ${props =>
    props?.['padding-s'] &&
    'padding-start: ' + suffixPx(props['padding-s']) + ';'}
  ${props =>
    props?.['padding-t'] &&
    'padding-top: ' + suffixPx(props['padding-t']) + ';'}
  ${props =>
    props?.['padding-v'] &&
    'padding-vertical: ' + suffixPx(props['padding-v']) + ';'}
  ${props => props?.position && 'position: ' + props.position + ';'}
  ${props => props?.right && 'right: ' + suffixPx(props.right) + ';'}
  ${props => props?.start && 'start: ' + suffixPx(props.start) + ';'}
  ${props => props?.top && 'top: ' + suffixPx(props.top) + ';'}
  ${props => props?.w && 'width: ' + suffixPx(props.w) + ';'}
  ${props => props?.['z-index'] && 'z-index: ' + props['z-index'] + ';'}
`;

export const ViewStyle = css<ViewStyleProps>`
  ${props =>
    props?.[vars.backfaceV] &&
    'backface-visibility: ' + props[vars.backfaceV] + ';'}
  ${props => props?.bc && 'background-color: ' + props.bc + ';'}
  ${props =>
    props?.['border-bc'] && 'border-bottom-color: ' + props['border-bc'] + ';'}
  ${props =>
    props?.['border-ber'] &&
    'border-bottom-end-radius: ' + suffixPx(props['border-ber']) + ';'}
  ${props =>
    props?.[vars.borderBlr] &&
    'border-bottom-left-radius: ' + suffixPx(props[vars.borderBlr]) + ';'}
  ${props =>
    props?.[vars.borderBrr] &&
    'border-bottom-right-radius: ' + suffixPx(props[vars.borderBrr]) + ';'}
  ${props =>
    props?.['border-w'] &&
    'borderbottomstartradius: ' + suffixPx(props['border-w']) + ';'}
  ${props => props?.['border-c'] && 'border-color: ' + props['border-c'] + ';'}
  ${props =>
    props?.['border-ec'] && 'border-end-color: ' + props['border-ec'] + ';'}
  ${props =>
    props?.['border-lc'] && 'border-left-color: ' + props['border-lc'] + ';'}
  ${props =>
    props?.['border-r'] &&
    'border-radius: ' + suffixPx(props['border-r']) + ';'}
  ${props =>
    props?.['border-rc'] && 'border-right-color: ' + props['border-rc'] + ';'}
  ${props =>
    props?.['border-sc'] && 'border-start-color: ' + props['border-sc'] + ';'}
  ${props => props?.['border-s'] && 'border-style: ' + props['border-s'] + ';'}
  ${props =>
    props?.['border-tc'] && 'border-top-color: ' + props['border-tc'] + ';'}
  ${props =>
    props?.['border-ter'] &&
    'border-top-end-radius: ' + suffixPx(props['border-ter']) + ';'}
  ${props =>
    props?.[vars.borderTLR] &&
    'border-top-left-radius: ' + suffixPx(props[vars.borderTLR]) + ';'}
  ${props =>
    props?.[vars.borderTrr] &&
    'bordertoprightradius: ' + suffixPx(props[vars.borderTrr]) + ';'}
  ${props =>
    props?.['border-tsr'] &&
    'border-top-start-radius: ' + suffixPx(props['border-tsr']) + ';'}
  ${props =>
    props?.['border-w'] && 'border-width: ' + suffixPx(props['border-w']) + ';'}
  ${props => props?.opacity && 'opacity: ' + props.opacity + ';'}
  ${props => props?.elevation && 'elevation: ' + props.elevation + ';'}
`;

export const ImageStyle = css<ImageStyleProps>`
  ${props => props?.['resize-m'] && 'resize-mode: ' + props?.['resize-m'] + ';'}
  ${props =>
    props?.[vars.backfaceV] &&
    'backface-visibility: ' + props?.[vars.backfaceV] + ';'}
  ${props =>
    props?.[vars.borderBlr] &&
    'border-bottom-left-radius: ' + suffixPx(props?.[vars.borderBlr]) + ';'}
  ${props =>
    props?.[vars.borderBrr] &&
    'border-bottom-right-radius: ' + suffixPx(props?.[vars.borderBrr]) + ';'}
  ${props =>
    props?.['background-c'] &&
    'background-color: ' + props?.['background-c'] + ';'}
  ${props =>
    props?.['border-c'] && 'border-color: ' + props?.['border-c'] + ';'}
  ${props =>
    props?.['border-w'] &&
    'border-width: ' + suffixPx(props?.['border-w']) + ';'}
  ${props =>
    props?.['border-r'] &&
    'border-radius: ' + suffixPx(props?.['border-r']) + ';'}
  ${props =>
    props?.[vars.borderTLR] &&
    'border-top-left-radius: ' + suffixPx(props?.[vars.borderTLR]) + ';'}
  ${props =>
    props?.[vars.borderTrr] &&
    'border-top-right-radius: ' + suffixPx(props?.[vars.borderTrr]) + ';'}
  ${props =>
    props?.['overflow-f'] && 'overflow: ' + props?.['overflow-f'] + ';'}
  ${props =>
    props?.['overlay-c'] && 'overlay-color: ' + props?.['overlay-c'] + ';'}
  ${props => props?.['tint-c'] && 'tint-color: ' + props?.['tint-c'] + ';'}
  ${props => props?.opacity && 'opacity: ' + props?.opacity + ';'}
`;

export const TextStyleIOS = css<TextStyleIOSProps>`
  ${props => props?.['font-v'] && 'font-variant: ' + props['font-v'] + ';'}
  ${props =>
    props?.['text-dc'] && 'text-decoration-color: ' + props['text-dc'] + ';'}
  ${props =>
    props?.['text-ds'] && 'text-decoration-style: ' + props['text-ds'] + ';'}
  ${props =>
    props?.['writing-d'] && 'writing-direction: ' + props['writing-d'] + ';'}
`;

export const TextStyleAndroid = css<TextStyleAndroidProps>`
  ${props =>
    props?.['text-av'] && 'text-align-vertical: ' + props['text-av'] + ';'}
  ${props =>
    props?.['include-fp'] &&
    'include-font-padding: ' + props['include-fp'] + ';'}
`;

export const TextStyle = css<TextStyleProps>`
  ${props => props?.color && 'color: ' + props.color + ';'}
  ${props =>
    props?.['font-family'] && 'font-family: ' + props['font-family'] + ';'}
  ${props =>
    props?.['font-size'] && 'font-size: ' + suffixPx(props['font-size']) + ';'}
  ${props =>
    props?.['font-style'] && 'font-style: ' + props['font-style'] + ';'}
  ${props =>
    props?.['font-weight'] && 'font-weight: ' + props['font-weight'] + ';'}
  ${props =>
    props?.['line-h'] && 'line-height: ' + suffixPx(props['line-h']) + ';'}
  ${props => props?.['text-a'] && 'text-align: ' + props['text-a'] + ';'}
  ${props =>
    props?.['text-dl'] && 'text-decoration-line: ' + props['text-dl'] + ';'}
  ${props =>
    props?.['text-sc'] && 'text-shadow-color: ' + props['text-sc'] + ';'}
  ${props =>
    props?.['text-so'] &&
    'text-shadow-offset: ' +
      suffixPx(props['text-so'].width) +
      ' ' +
      suffixPx(props['text-so'].height) +
      ';'}
  ${props =>
    props?.['text-sr'] &&
    'text-shadow-radius: ' + suffixPx(props['text-sr']) + ';'}
  ${props => props?.['text-t'] && 'text-transform: ' + props['text-t'] + ';'}
  ${props =>
    props?.['letter-s'] &&
    'letter-spacing: ' + suffixPx(props['letter-s']) + ';'}
`;

export const FlatListStyle = css<FlatListProps>``;

export const BackgroundShadow = css`
  elevation: 5;
  border-radius: ${suffixPx(5)};
  shadow-color: ${color.shadowBlue};
  shadow-offset: ${suffixPx(0)} ${suffixPx(6)};
  shadow-opacity: 0.35;
  shadow-radius: ${suffixPx(5)};
`;
