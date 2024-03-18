/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {Container, FlatList, Text, ImgPicker, Toast} from '@Components';
import {MultiSelectImagePickerProps} from './interfaces';

const MultiSelectImagePicker: React.FC<MultiSelectImagePickerProps> = ({
  heading,
  defaultData,
  alignment,
  noOfPictures = 3,
  onResponse,
}) => {
  const [photo, setPhoto] = useState<any>(defaultData);

  function addPhotoHandler(response: any) {
    if (photo.length < noOfPictures) {
      let updatedPhoto = [...photo];
      updatedPhoto = [...updatedPhoto, response];
      setPhoto(updatedPhoto);
      if (onResponse) {
        onResponse(updatedPhoto);
      }
    } else {
      Toast('only send minimum   ' + noOfPictures + '  pictures');
    }
  }

  function deletePhotoHandler(index: number) {
    const updatedPhoto = [...photo];
    updatedPhoto.splice(index, 1);
    setPhoto(updatedPhoto);
  }

  return (
    <Container>
      {heading && (
        <Text variant={'input-heading'} margin-b={12}>
          {heading}
        </Text>
      )}
      <FlatList<React.ElementType>
        numColumns={alignment}
        data={[...photo, {}]}
        renderItem={({item, index}: {item: any; index: number}) => (
          <Container padding={5}>
            <ImgPicker
              isDelete={[...photo, {}].length - 1 === index ? false : true}
              h={80}
              w={80}
              defaultImage={item}
              onResponse={response => {
                addPhotoHandler(response);
              }}
              onDeleteResponse={() => {
                deletePhotoHandler(index);
              }}
            />
          </Container>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </Container>
  );
};

export {MultiSelectImagePicker};
