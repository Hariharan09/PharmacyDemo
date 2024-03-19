import React from 'react';
import {Container, Text} from '../../../Components';

const NoDataFound: React.FC = ({}) => {
  return (
    <Container>
      <Text variant={'screen-description'} font-s={25} flex-as={'center'}>
        {'No Data Found'}
      </Text>
    </Container>
  );
};

export {NoDataFound};
