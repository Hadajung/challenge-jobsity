import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';

interface TouchableType extends TouchableOpacityProps {}

export const Container = styled.TouchableOpacity<TouchableType>({
  padding: 8,
  alignItems: 'center',
  justifyContent: 'center',
});
