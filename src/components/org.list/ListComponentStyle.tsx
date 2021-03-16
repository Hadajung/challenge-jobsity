import React from 'react';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import {Text} from '../index';

export const ListContainer = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const LoadingContainer = styled.View({
  alignItems: 'center',
});

const CardLoadingComponent: React.FC = () => {
  return (
    <>
      <LoadingContainer>
        <PlaceholderMedia
          style={{
            width: 104,
            height: 160,
            marginBottom: 8,
            backgroundColor: '#888',
          }}
        />
        <PlaceholderLine width={60} style={{backgroundColor: '#888'}} />
      </LoadingContainer>
    </>
  );
};

export const ListLoadingComponent: React.FC = () => {
  return (
    <Placeholder Animation={Fade}>
      <ListContainer>
        <CardLoadingComponent />
        <CardLoadingComponent />
        <CardLoadingComponent />
        <CardLoadingComponent />
        <CardLoadingComponent />
        <CardLoadingComponent />
        <CardLoadingComponent />
        <CardLoadingComponent />
        <CardLoadingComponent />
      </ListContainer>
    </Placeholder>
  );
};

const EmptyContainer = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const EmptyList: React.FC = () => {
  const {t} = useTranslation();
  return (
    <EmptyContainer>
      <Text preset="desc">{t('noResult')}</Text>
    </EmptyContainer>
  );
};
