import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from '../index';
import {ListContainer, ListLoadingComponent} from './ListComponentStyle';
import {ShowDetail} from '../../interfaces';

interface ListComponentProps {
  list: ShowDetail[];
  loading?: boolean;
  fetchMore?: () => void;
}

export const ListComponent: React.FC<ListComponentProps> = ({
  list,
  loading,
  fetchMore,
}) => {
  const navigation = useNavigation();
  if (loading) return <ListLoadingComponent />;
  return (
    <ListContainer>
      <FlatList
        data={list}
        contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        numColumns={3}
        renderItem={({item}) => {
          return (
            <Card
              key={item.id}
              source={
                item.image &&
                item.image.medium && {
                  uri: item.image && item.image.medium,
                }
              }
              title={item.name}
              onPress={() => navigation.navigate('ShowDetailScreen', {...item})}
            />
          );
        }}
        onEndReached={fetchMore}
        initialNumToRender={12}
      />
      {/* {list.map((listItem) => {
        return (
          <Card
            key={listItem.id}
            source={
              listItem.image &&
              listItem.image.medium && {
                uri: listItem.image && listItem.image.medium,
              }
            }
            title={listItem.name}
            onPress={() =>
              navigation.navigate('ShowDetailScreen', {...listItem})
            }
          />
        );
      })} */}
    </ListContainer>
  );
};
