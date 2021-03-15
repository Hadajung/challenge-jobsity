import styled from 'styled-components/native';
import {Colors} from '../../constants/theme';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})`
  flex: 1;
  background-color: #000000;
`;

export const Header = styled.View({
  flexDirection: 'row',
});

export const Body = styled.View({});

export const InformationContainer = styled.View({
  flexDirection: 'column',
  marginLeft: 32,
  paddingTop: 16,
  paddingBottom: 16,
  justifyContent: 'space-between',
});

export const ButtonContainer = styled.View({
  flexDirection: 'row',
});

export const EpisodeContainer = styled.View({});

export const EpisodeTitle = styled.View({
  width: '100%',
  borderBottomWidth: 1,
  borderBottomColor: Colors.Gray,
});

export const Border = styled.View({
  paddingVertical: 4,
  borderBottomWidth: 2,
  borderBottomColor: Colors.Red,
  width: 60,
});
