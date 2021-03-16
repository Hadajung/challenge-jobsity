import React from 'react';
import {FlatList} from 'react-native';
import MenuItemComponent from '../mol.menuItem';

interface MenuItem {
  title: string;
  onPress?: () => void;
}

interface MenuComponentProps {
  menuList: MenuItem[];
}

export const MenuComponent: React.FC<MenuComponentProps> = ({menuList}) => {
  return (
    <FlatList
      data={menuList}
      renderItem={({item}) => (
        <MenuItemComponent title={item.title} onPress={item.onPress} />
      )}
    />
  );
};
