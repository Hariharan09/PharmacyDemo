import {Container, Text, Touchable, ImageView} from '@Components';
import React, {FC} from 'react';
import {icons} from '@Assets';
import {ChooseLanguageProps} from './interface';
import {translate} from '@I18n';

const ChooseLanguage: FC<ChooseLanguageProps> = ({selected, onSelected}) => {
  return (
    <Container>
      <Text variant={'input-heading'}>{translate('auth.chooseLanguge')}</Text>
      <Container flex-d={'row'} margin-t={5} margin-l={-8}>
        <Touchable
          flex-ai={'center'}
          accessibilityRole="button"
          flex-d={'row'}
          onPress={() => {
            if (onSelected) {
              onSelected('en');
            }
          }}>
          <ImageView
            source={selected === 'en' ? icons.selectOn : icons.selectOff}
            h={30}
            w={30}
          />
          <Text font-size={13} variant={'light'}>
            {'English'}
          </Text>
        </Touchable>
        <Touchable
          onPress={() => {
            if (onSelected) {
              onSelected('ta');
            }
          }}
          margin-l={30}
          flex-ai={'center'}
          accessibilityRole="button"
          flex-d={'row'}>
          <ImageView
            source={selected === 'ta' ? icons.selectOn : icons.selectOff}
            h={30}
            w={30}
          />
          <Text font-size={13} variant={'light'}>
            {'தமிழ்'}
          </Text>
        </Touchable>
        <Touchable
          onPress={() => {
            if (onSelected) {
              onSelected('tel');
            }
          }}
          margin-l={30}
          flex-ai={'center'}
          accessibilityRole="button"
          flex-d={'row'}>
          <ImageView
            source={selected === 'tel' ? icons.selectOn : icons.selectOff}
            h={30}
            w={30}
          />
          <Text font-size={13} variant={'light'}>
            {'Telegu'}
          </Text>
        </Touchable>
      </Container>
    </Container>
  );
};
export {ChooseLanguage};
