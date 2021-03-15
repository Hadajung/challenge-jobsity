import React from 'react';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import {ModalContainer, ModalOverlay, ModalBody} from './ModalComponentStyle';

interface ModalComponentProps {
  visible: boolean;
  closeModal: () => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  closeModal,
  children,
}) => {
  return (
    <Modal visible={visible} transparent>
      <ModalContainer>
        <TouchableWithoutFeedback onPress={closeModal}>
          <ModalOverlay />
        </TouchableWithoutFeedback>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </Modal>
  );
};
