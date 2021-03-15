import React from 'react';
import {Text} from '../index';
import {ErrorContainer} from './ErrorComponentStyle';

export const ErrorComponent: React.FC = () => {
  return (
    <ErrorContainer>
      <Text preset="small">Oops! An error occured :( Try later.</Text>
    </ErrorContainer>
  );
};
