import React, {FC} from 'react';
import {Container, Text, Touchable, ImageView} from '../../../Components';
import {icons} from '../../../Assets';
import {CartButtonProps} from './interface';

const CardButton: FC<CartButtonProps> = ({title, onPress, toggle = false}) => {
  return (
    <Touchable
      accessibilityRole="button"
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}>
      <Container
        variant={'card'}
        flex-d={'row'}
        padding-l={15}
        padding-r={15}
        flex-ai={'center'}
        flex-jc={'space-between'}>
        <Text padding-v={7} variant={'screen-heading'} font-size={10}>
          {title}
        </Text>
        <ImageView
          h={12}
          w={12}
          source={!toggle ? icons.arrowRight : icons.close}
        />
      </Container>
    </Touchable>
  );
};
export {CardButton};
