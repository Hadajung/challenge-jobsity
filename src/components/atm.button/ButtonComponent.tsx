import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {Container} from './ButtonComponentStyle';
import {Text, Icon} from '../index';

interface IconButtonProps {
  icon?: ImageSourcePropType;
  tintColor?: tintColor;
  title: string;
  onPress: () => void;
}

export const Button: React.FC<IconButtonProps> = ({
  title,
  icon,
  onPress,
  tintColor,
}) => {
  return (
    <Container onPress={onPress}>
      {icon && (
        <Icon source={icon} style={{marginBottom: 4}} tintColor={tintColor} />
      )}
      <Text preset="desc">{title}</Text>
    </Container>
  );
};
