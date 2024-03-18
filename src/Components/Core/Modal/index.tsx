import React from 'react';
import {Modal as RNModal} from 'react-native';
import {ModalProps} from './interfaces';
import {Container, Touchable, ScrollView, Text, ImageView} from '@Components';
import {color} from '@Theme';
import {icons} from '@Assets';
import {fonts} from '@Utils/Fonts';

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  isPositive,
  isNegative,
  isNegativeOnChange,
  isPositiveOnChange,
  isDropDown = false,
}) => {
  return (
    <RNModal visible={visible} transparent animationType="none">
      <Container
        h={'100%'}
        w={'100%'}
        flex-jc={'center'}
        bc={color.backgroundColor}>
        <Container variant={'card'} margin={40} padding={25}>
          <Touchable
            accessibilityRole="button"
            onPress={onClose}
            padding={10}
            flex-as={'flex-end'}
            flex-ai={'flex-end'}>
            <ImageView
              h={15}
              w={15}
              source={icons.close}
              tint-c={color.black}
            />
          </Touchable>

          <ScrollView
            padding-v={isDropDown ? 0 : 20}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
          <Container padding-v={isDropDown ? 0 : 10}>
            {isPositive ? (
              <Touchable
                margin-b={8}
                bc={color.primaryButton}
                flex-jc={'center'}
                variant={'model-btn'}
                onPress={isPositiveOnChange}
                accessibilityRole="button">
                <Text
                  color={color.white}
                  font-family={fonts.book}
                  font-size={10}
                  text-t={'uppercase'}
                  letter-s={2.5}
                  text-a={'center'}>
                  {isPositive}
                </Text>
              </Touchable>
            ) : (
              <Container />
            )}
            {isNegative ? (
              <Touchable
                flex-jc={'center'}
                variant={'model-btn'}
                onPress={isNegativeOnChange}
                accessibilityRole="button">
                <Text
                  color={color.white}
                  font-family={fonts.book}
                  font-size={10}
                  text-t={'uppercase'}
                  letter-s={2.5}
                  text-a={'center'}>
                  {isNegative}
                </Text>
              </Touchable>
            ) : (
              <Container />
            )}
          </Container>
        </Container>
      </Container>
    </RNModal>
  );
};

export {Modal};
