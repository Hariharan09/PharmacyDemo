import React from 'react';
import {Image} from '../../../Components';
import {ImageViewProps} from './interfaces';
function ImageView({variant, source, isUri, ...props}: ImageViewProps) {
  return (
    <Image
      {...props}
      source={isUri ? {uri: source} : source}
      variant={variant}
      accessibilityIgnoresInvertColors={false}
    />
  );
}

export {ImageView};
