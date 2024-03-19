import React from 'react';
import {Text, Input} from '../../../Components';
import {CustomInputProps} from './interface';
import {color} from '../../../Theme';

const CustomInput = React.forwardRef(
  (
    {
      heading,
      variant = 'grey',
      placeholder,
      type = 'default',
      ...rest
    }: CustomInputProps,
    ref: any,
  ) => {
    return (
      <>
        {heading && (
          <Text margin-b={12} variant={'input-heading'}>
            {heading}
          </Text>
        )}
        <Input
          ref={ref}
          variant={variant}
          placeholderTextColor={color.GreyTint}
          placeholder={placeholder}
          keyboardType={type}
          {...rest}
        />
      </>
    );
  },
);
CustomInput.displayName = 'CustomInput';
export {CustomInput};
