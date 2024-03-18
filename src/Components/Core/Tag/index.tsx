import React from 'react';
import {TagProps} from './interface';
import {Touchable, Container, Text, ImageView} from '@Components';
import {icons} from '@Assets';
import {color} from '@Theme/Color';

const Tag: React.FC<TagProps> = ({variant, onPress}) => {
  const defaultIconSize = {h: 10, w: 10};

  function getColorByVariant() {
    switch (variant) {
      case 'cancel':
        return {
          ...defaultIconSize,
          bc: color.brightGray,
          icons: icons.close,
          txtColor: color.davyGrey,
          Text: 'CANCEL',
        };
      case 'delete-all':
        return {
          ...defaultIconSize,
          bc: color.red,
          icons: icons.deleteLine,
          txtColor: color.white,
          Text: 'DELETE ALL',
        };
      case 'directions':
        return {
          ...defaultIconSize,
          bc: color.green,
          icons: icons.location,
          txtColor: color.white,
          h: 10,
          w: 10,
          Text: 'DIRECTIONS',
        };
      case 'call':
        return {
          h: 9,
          w: 9,
          bc: color.smallButtonColor,
          icons: icons.call,
          txtColor: color.black,
          Text: 'Call',
        };
      case 'e-mail':
        return {
          bc: color.smallButtonColor,
          txtColor: color.black,
          Text: 'Email',
        };
    }
  }
  return (
    <Touchable
      accessibilityRole="button"
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}>
      <Container
        bc={getColorByVariant().bc}
        variant={'tag'}
        flex-d={'row'}
        flex-jc={'center'}
        flex-ai={'center'}>
        <Text
          variant={'medium'}
          font-size={9}
          padding-r={5}
          letter-s={1.2}
          color={getColorByVariant().txtColor}>
          {getColorByVariant().Text}
        </Text>
        <ImageView
          tint-c={getColorByVariant().txtColor}
          w={getColorByVariant().h}
          h={getColorByVariant().w}
          source={getColorByVariant().icons}
        />
      </Container>
    </Touchable>
  );
};

export {Tag};
