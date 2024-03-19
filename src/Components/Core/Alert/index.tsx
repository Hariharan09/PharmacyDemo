import React from 'react';
import {AlertProps} from './interfaces';
import {Container, Image, Text} from '../../../Components';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {icons} from '../../../Assets';
import {color} from '../../../Theme';
import {fonts} from '../../../Utils';

const Alert: React.FC<AlertProps> = ({
  visible,
  title,
  content,
  dismiss = true,
  onShow,
  onClose,
  onDismiss,
}) => {
  return (
    <>
      {visible && (
        <TouchableWithoutFeedback
          accessibilityRole="button"
          onPress={() => {
            if (dismiss && onDismiss) {
              onDismiss();
            }
          }}
          onLayout={onShow}>
          <Container
            w={'100%'}
            h={'100%'}
            bc={'rgba(52, 52, 52, 0.25)'}
            position={'absolute'}
            flex-jc={'center'}
            flex-ai={'center'}>
            <TouchableWithoutFeedback accessibilityRole="button">
              <Container w={'80%'} padding={10} bc={color.white} border-r={10}>
                <Container
                  padding-b={10}
                  flex-d={'row'}
                  flex-ai={'stretch'}
                  flex-jc={title ? 'space-between' : 'flex-end'}>
                  {title && (
                    <Text font-family={fonts.bold} font-s={14}>
                      {title}
                    </Text>
                  )}
                  <TouchableOpacity
                    onPress={onClose}
                    accessibilityRole="button">
                    <Container padding-r={15} padding-t={15}>
                      <Image
                        w={10}
                        h={10}
                        source={icons.close}
                        accessibilityIgnoresInvertColors={true}
                      />
                    </Container>
                  </TouchableOpacity>
                </Container>
                <Container>{content}</Container>
              </Container>
            </TouchableWithoutFeedback>
          </Container>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export {Alert};
