import React from 'react';
import {Container, Text, ImageView} from '../../../Components';
import {icons} from '../../../Assets';
import {CartCountProps} from './interfaces';

const CartCount = ({itemCount}: CartCountProps) => {
  return (
    <Container variant={'rounded-cart'} flex-ai={'center'} flex-jc={'center'}>
      <ImageView variant={'rounded-icon'} source={icons.cart} h={28} w={28} />
      <Container
        position={'absolute'}
        right={8}
        top={8}
        variant={'rounded-cartcount'}
        flex-ai={'center'}
        flex-jc={'center'}>
        <Text variant={'bold'} font-size={10} text-a={'center'}>
          {itemCount}
        </Text>
      </Container>
    </Container>
  );
};
export {CartCount};
