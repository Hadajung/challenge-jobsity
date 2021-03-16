import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Text} from '../../components';
import {MenuItemContainer} from './MenuItemComponentStyle';

interface MenuItemComponentProps {
  title: string;
  onPress?: () => void;
}

export const MenuItemComponent: React.FC<MenuItemComponentProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <MenuItemContainer>
        <Text preset="semibold">{title}</Text>
      </MenuItemContainer>
    </TouchableWithoutFeedback>
  );
};
