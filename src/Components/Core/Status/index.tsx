import React from 'react';
import {BranchCardProps} from './interface';
import {Container, Text, ImageView} from '@Components';
import {icons} from '@Assets';
import {color} from '@Theme';
const Status: React.FC<BranchCardProps> = ({status = true}) => {
  return (
    <Container margin-t={20} flex-d={'row'}>
      <Container flex={1}>
        <Text font-size={11} letter-s={1} padding-b={3}>
          {'STATUS'}
        </Text>
        <Text
          color={status ? color.green : color.red}
          font-size={12}
          variant={'bold'}>
          {status ? 'Active' : 'IN ACTIVE'}
        </Text>
      </Container>
      <Container flex={1}>
        <Container variant={'rounded-icon'}>
          <ImageView h={12} w={12} source={icons.edit} />
        </Container>
      </Container>
    </Container>
  );
};

export {Status};
