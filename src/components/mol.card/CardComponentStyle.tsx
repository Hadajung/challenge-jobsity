import React from 'react';
import styled from 'styled-components/native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

export const Container = styled.TouchableOpacity({
  alignItems: 'center',
  marginBottom: 8,
  width: '33%',
  paddingHorizontal: 4,
});

export const CardLoadingComponent: React.FC = () => {
  return (
    <Placeholder Animation={Fade}>
      <Container>
        <PlaceholderMedia
          style={{
            width: 104,
            height: 160,
            marginBottom: 8,
            backgroundColor: '#888',
          }}
        />
        <PlaceholderLine width={14} style={{backgroundColor: '#888'}} />
      </Container>
    </Placeholder>
  );
};
