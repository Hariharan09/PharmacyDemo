import React from 'react';
import {EditButtonProps} from './interface';
import {Container, Text, Touchable, ImageView} from '../../../Components';
import {icons} from '../../../Assets';
import {color} from '../../../Theme';

const EditButton: React.FC<EditButtonProps> = ({}) => {
  return (
    <Touchable accessibilityRole="button">
      <Container variant={'edit'}>
        <ImageView
          w={12}
          h={12}
          source={icons.edit}
          tint-c={color.iColorPrimary}
          margin-h={5}
        />
        <Text font-size={12} color={color.iColorPrimary} variant={'bold'}>
          {'EDIT'}
        </Text>
      </Container>
    </Touchable>
  );
};

export {EditButton};
