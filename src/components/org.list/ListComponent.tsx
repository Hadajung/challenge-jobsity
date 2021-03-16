import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Text} from '../index';
import {EmptyList, ListLoadingComponent} from './ListComponentStyle';
import {SystemImages} from '../../constants/theme';

interface ListComponentProps {
  list: any[];
  fetchMore?: () => void;
  title?: string;
  footerLoading?: boolean;
  loading?: boolean;
  onPressItem?: (props: any) => void;
  type: 'show' | 'episode';
}

export const ListComponent: React.FC<ListComponentProps> = ({
  list,
  fetchMore,
  title,
  footerLoading,
  loading,
  onPressItem,
  type,
}) => {
  const navigation = useNavigation();
  if (loading && !footerLoading) return <ListLoadingComponent />;
  return (
    <FlatList
      data={list}
      contentContainerStyle={{
        flexDirection: 'column',
      }}
      numColumns={3}
      ListFooterComponent={() =>
        footerLoading ? <ListLoadingComponent /> : null
      }
      ListHeaderComponent={() => <Text preset="title">{title}</Text>}
      ListEmptyComponent={() => (!loading ? <EmptyList /> : null)}
      renderItem={({item}) => {
        return (
          <Card
            key={item.id}
            type={type}
            source={
              (item.image &&
                item.image.medium && {
                  uri: item.image && item.image.medium,
                }) ||
              SystemImages.preview
            }
            title={item.name}
            onPress={
              onPressItem
                ? () => onPressItem(item)
                : () => navigation.navigate('ShowDetailScreen', {...item})
            }
          />
        );
      }}
      onEndReachedThreshold={0.5}
      onEndReached={fetchMore}
      initialNumToRender={12}
    />
  );
};
