import React, {FC, useState} from 'react';
import {
  Text,
  Container,
  Touchable,
  Modal,
  ImageView,
  Button,
} from '@Components';
import {ImagePickerProps} from './interfaces';
import ImagePicker from 'react-native-image-crop-picker';
import {icons} from '@Assets';
import {color} from '@Theme';

const ImgPicker: FC<ImagePickerProps> = ({
  heading,
  defaultImage,
  type = 'both',
  front,
  crop = true,
  onResponse,
  onDeleteResponse,
  h,
  w,
  isDelete = false,
}) => {
  const [imagePickerModal, setImagePickerModal] = useState(false);

  const actionTypeHandler = () => {
    switch (type) {
      case 'camera':
        openCameraLibrary();
        break;
      case 'gallery':
        openGalleryLibrary();
        break;
      case 'both':
        openBoth();
        break;
    }
  };

  const openBoth = () => {
    setImagePickerModal(!imagePickerModal);
  };

  const getBase64FromCamera = (image: any) => {
    const imageResponse = {
      base64: image.data,
      type: image.mime,
      uri: image.path,
    };
    if (type === 'both') {
      setImagePickerModal(!imagePickerModal);
    }
    if (onResponse) {
      onResponse(imageResponse);
    }
  };

  const openCameraLibrary = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      includeBase64: true,
      useFrontCamera: front,
      cropping: crop,
    }).then(image => {
      getBase64FromCamera(image);
    });
  };

  const openGalleryLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      getBase64FromCamera(image);
    });
  };

  return (
    <>
      {heading && (
        <Text margin-b={12} variant={'input-heading'}>
          {heading}
        </Text>
      )}
      <Touchable
        accessibilityRole="button"
        onPress={() => {
          actionTypeHandler();
        }}>
        <Container h={h} w={w} variant={'image-picker'}>
          {defaultImage && defaultImage.uri ? (
            <ImageView
              isUri
              source={defaultImage.uri}
              h={'100%'}
              w={'100%'}
              overflow={'hidden'}
            />
          ) : (
            <ImageView
              tint-c={color.GreyTint}
              source={icons.addFill}
              h={30}
              w={30}
            />
          )}
        </Container>
        {isDelete && (
          <Touchable
            accessibilityRole="button"
            position={'absolute'}
            variant={'rounded-delete'}
            onPress={onDeleteResponse}
            right={-5}
            top={-5}>
            <ImageView tint-c={color.red} source={icons.delete} h={14} w={11} />
          </Touchable>
        )}
      </Touchable>
      <Modal
        visible={imagePickerModal}
        onClose={() => {
          setImagePickerModal(!imagePickerModal);
        }}>
        <Text variant={'screen-heading'}>{'Pick Image Form'}</Text>
        <Container
          flex-d={'row'}
          flex-jc={'space-around'}
          flex-ai={'center'}
          margin-t={20}>
          <Touchable
            accessibilityRole="button"
            onPress={() => {
              openCameraLibrary();
            }}>
            <ImageView
              isUri
              source={'https://img.icons8.com/ios/2x/compact-camera.png'}
              flex-as={'center'}
              h={25}
              w={25}
            />
            <Text>{'Camera'}</Text>
          </Touchable>
          <Touchable
            accessibilityRole="button"
            onPress={() => {
              openGalleryLibrary();
            }}>
            <ImageView
              isUri
              source={'https://img.icons8.com/ios/2x/image-gallery.png'}
              flex-as={'center'}
              h={25}
              w={25}
            />
            <Text>{'Gallery'}</Text>
          </Touchable>
          {/* <Touchable
            accessibilityRole="button"
            onPress={() => {
              openDocumentsLibrary();
            }}>
            <ImageView
              isUri
              source={
                'https://img.icons8.com/external-creatype-outline-colourcreatype/2x/external-app-web-application-1-creatype-outline-colourcreatype-23.png'
              }
              flex-as={'center'}
              h={25}
              w={25}
            />
            <Text>{'Attachments'}</Text>
          </Touchable> */}
        </Container>
      </Modal>
    </>
  );
};

export {ImgPicker};
