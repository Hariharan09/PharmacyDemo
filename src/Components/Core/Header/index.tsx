import {icons} from '@Assets';
import {goBack} from '@Navigators/NavigationUtilities';
import {Container, Text, Touchable, ImageView, Tag} from '@Components';
import {color} from '@Theme';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {HeaderProps} from './interface';

const Header: FC<HeaderProps> = ({
  heading = 'Heading',
  subHeading,
  variant = 'back',
  onUserPress,
  onCallPress,
  onEmailPress,
  onMenuDotButton,
}) => {
  const navigation = useNavigation();
  return (
    <>
      {variant === 'menu' && (
        <Container variant={'tool-bar'} flex-jc={'center'}>
          <Touchable
            margin-t={20}
            margin-l={23}
            accessibilityRole="button"
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}>
            <ImageView
              source={icons.menuGreen}
              h={14}
              w={17}
              tint-c={'black'}
            />
          </Touchable>

          <Touchable
            accessibilityRole="button"
            onPress={() => {
              if (onUserPress) {
                onUserPress();
              }
            }}
            flex={1}
            flex-jc={'center'}
            flex-ai={'center'}
            margin-r={20}>
            <Text variant={'toolbar-heading'}>{''}</Text>
          </Touchable>
        </Container>
      )}
      {variant === 'back' && (
        <Container
          padding-h={15}
          flex-d={'row'}
          variant={'tool-bar'}
          flex-ai={'center'}>
          <Touchable
            padding={15}
            right={10}
            accessibilityRole="button"
            onPress={() => {
              goBack();
            }}>
            <Container>
              <ImageView
                source={icons.leftArrow}
                h={15}
                w={15}
                tint-c={color.black}
              />
            </Container>
          </Touchable>
          <Container
            flex={1}
            flex-as={'center'}
            flex-jc={'center'}
            flex-ai={'center'}
            margin-r={20}>
            <Text text-t={'uppercase'} letter-s={2} variant={'book'}>
              {heading}
            </Text>
          </Container>
        </Container>
      )}
      {variant === 'thread' && (
        <Container
          padding-h={18}
          flex-d={'row'}
          variant={'tool-bar'}
          flex-ai={'center'}>
          <Touchable
            padding={18}
            right={15}
            accessibilityRole="button"
            onPress={() => {
              goBack();
            }}>
            <Container>
              <ImageView
                source={icons.leftArrow}
                h={15}
                w={15}
                tint-c={color.black}
              />
            </Container>
          </Touchable>

          <Container
            flex={1}
            flex-as={'center'}
            flex-jc={'center'}
            flex-ai={'flex-start'}>
            <Text text-t={'uppercase'} letter-s={2} variant={'book'}>
              {heading}
            </Text>
          </Container>
          <Touchable
            accessibilityRole="button"
            padding={10}
            onPress={() => {
              if (onMenuDotButton) {
                onMenuDotButton();
              }
            }}>
            <ImageView
              isUri
              source={'https://cdn-icons-png.flaticon.com/128/2089/2089793.png'}
              h={15}
              w={15}
            />
          </Touchable>
        </Container>
      )}
      {variant === 'companyHeader' && (
        <Container
          padding-h={15}
          flex-d={'row'}
          variant={'tool-bar'}
          flex-ai={'center'}>
          <Touchable
            right={10}
            padding={15}
            accessibilityRole="button"
            onPress={() => {
              goBack();
            }}>
            <Container>
              <ImageView
                source={icons.leftArrow}
                h={15}
                w={15}
                tint-c={color.black}
              />
            </Container>
          </Touchable>

          <Container
            flex-as={'center'}
            flex-jc={'center'}
            flex-ai={'center'}
            flex-w={'wrap'}>
            <Text text-t={'uppercase'} letter-s={2} variant={'book'}>
              {heading}
            </Text>
          </Container>
          <Container flex={1} flex-d={'row'} flex-jc={'flex-end'}>
            <Container margin-r={10}>
              <Tag
                variant={'call'}
                onPress={() => {
                  if (onCallPress) {
                    onCallPress();
                  }
                }}
              />
            </Container>
            <Tag
              variant={'e-mail'}
              onPress={() => {
                if (onEmailPress) {
                  onEmailPress();
                }
              }}
            />
          </Container>
        </Container>
      )}
    </>
  );
};
export {Header};
