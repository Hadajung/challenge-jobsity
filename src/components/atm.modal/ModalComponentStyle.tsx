import styled from 'styled-components/native';
import {Colors} from '../../constants/theme';

export const ModalContainer = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

export const ModalBody = styled.View({
  backgroundColor: Colors.White,
  width: '80%',
  maxHeight: '60%',
  borderRadius: 16,
  padding: 16,
  zIndex: 2,
});

export const ModalOverlay = styled.View({
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: Colors.Black,
  opacity: 0.6,
  zIndex: 1,
});
