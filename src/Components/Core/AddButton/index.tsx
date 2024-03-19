import React from 'react';
import {AddButtonProps} from './interface';
import {Container, Text, Touchable, ImageView} from '../../../Components';
import {icons} from '../../../Assets';
import {color} from '../../../Theme';

const AddButton: React.FC<AddButtonProps> = ({}) => {
  return (
    <Touchable accessibilityRole="button">
      <Container
        variant={'add'}
        flex-d={'row'}
        flex-jc={'center'}
        flex-ai={'center'}>
        <Text font-size={10} padding-r={5} color={color.white}>
          {'ADD'}
        </Text>
        <ImageView w={8} h={8} source={icons.plus} />
      </Container>
    </Touchable>
  );
};

export {AddButton};
