import React from 'react';
import {ButtonProps} from './interfaces';
import {ButtonText, ButtonTouchable, ImageView} from '../../../Components';
import {icons} from '../../../Assets';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  text,
  onPress,
  icon = icons.plus,
  hasIcon = false,
}) => {
  return (
    <ButtonTouchable variant={variant} onPress={onPress}>
      {hasIcon && <ImageView margin-r={5} source={icon} h={10} w={10} />}
      {text && text !== '' && <ButtonText variant={variant}>{text}</ButtonText>}
    </ButtonTouchable>
  );
};

export {Button};
