import React from 'react';
import {Container} from './CardComponentStyle';
import {ImageSourcePropType} from 'react-native';
import {Poster, Text} from '../index';
import {SystemImages} from '../../constants/theme';

export interface CardComponentProps {
  source: ImageSourcePropType;
  title?: string | null;
  onPress?: () => void;
  type: 'show' | 'episode';
}

export const CardComponent: React.FC<CardComponentProps> = ({
  title,
  onPress,
  source,
  type,
}) => {
  return (
    <Container onPress={onPress}>
      <Poster source={source} height={type === 'episode' ? 60 : 160} />
      <Text preset="cardTitle" numberOfLines={2}>
        {title}
      </Text>
    </Container>
  );
};

CardComponent.defaultProps = {
  source: SystemImages.preview,
};
