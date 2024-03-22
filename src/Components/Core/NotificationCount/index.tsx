import {icons} from '../../../Assets';
import {Container, Text, ImageView} from '../../../Components';
import {color} from '../../../Theme';
import React from 'react';
import {NotifyCountProps} from './interfaces';

const NotificationCount = ({itemCount}: NotifyCountProps) => {
  return (
    <Container z-index={1} variant={'rounded-notify'}>
      <ImageView source={icons.bell} h={20} w={20} />

      {itemCount && (
        <Container
          position={'absolute'}
          top={4}
          left={3}
          variant={'rounded-cart-count'}
          flex-ai={'center'}
          flex-jc={'center'}>
          <Text
            color={color.black}
            variant={'bold'}
            font-size={10}
            text-a={'center'}>
            {itemCount || 1}
          </Text>
        </Container>
      )}
    </Container>
  );
};
export {NotificationCount};
