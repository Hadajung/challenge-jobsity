import React from 'react';
import {Text} from '../index';
import {ErrorContainer} from './ErrorComponentStyle';

interface ErrorComponentProps {
  message: string;
}

export const ErrorComponent: React.FC<ErrorComponentProps> = (props) => {
  const {message} = props;
  return (
    <ErrorContainer>
      <Text preset="small">{message}</Text>
    </ErrorContainer>
  );
};
