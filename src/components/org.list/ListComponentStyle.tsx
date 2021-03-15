import React from 'react';
import styled from 'styled-components/native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

export const ListContainer = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: 16,
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
