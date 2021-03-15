import React from 'react';
import {Text} from '../../components';
import {Container} from './OfflineScreenStyle';

export const OfflineScreen: React.FC = () => {
  return (
    <Container>
      <Text preset="title">Your internet connection is lost!</Text>
    </Container>
  );
};
