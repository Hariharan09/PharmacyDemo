import React from 'react';
import {Container, Text} from '@Components';
import {translate} from '@I18n';

const NoDataFound: React.FC = ({}) => {
  return (
    <Container>
      <Text variant={'screen-description'} font-s={25} flex-as={'center'}>
        {translate('order.noDataFound')}
      </Text>
    </Container>
  );
};

export {NoDataFound};
