import {Container, Header, ImageView, Text} from '../../../../Components';
import React from 'react';
const Profile: React.FC<{}> = ({}) => {
  return (
    <>
      <Header heading={'profile'} />
      <Container flex={1} padding={20}>
        <Container flex-as={'center'}>
          <ImageView
            h={100}
            w={100}
            source={
              'https://m.media-amazon.com/images/I/71ZkHZcNslL._AC_UF1000,1000_QL80_.jpg'
            }
            isUri={'true'}
          />
          <Text margin-t={10} variant={'heading'} font-size={14}>
            {'Hariharan A'}
          </Text>
        </Container>
        <Container margin-t={20} flex-as={'center'}>
          <Text
            variant={'medium'}
            font-size={20}
            margin-t={5}
            text-t={'capitalize'}>
            {'390B, North street, Los Angels, New york'}
          </Text>
        </Container>
        <Container flex-as={'center'}>
          <Text
            margin-t={10}
            variant={'medium'}
            font-size={15}
            text-t={'capitalize'}>
            {'9629773070'}
          </Text>

          <Text
            margin-t={10}
            variant={'medium'}
            font-size={15}
            text-t={'capitalize'}>
            {'johnny@gmail.com'}
          </Text>
        </Container>
      </Container>
    </>
  );
};

export {Profile};
