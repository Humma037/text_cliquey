import React, { useRef } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CommentsComp from ''
const BottomModal = ({ isVisible, onClose, children }) => {
  const modalRef = useRef(null);

  const toggleModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={toggleModal} />
        <View style={styles.contentContainer}>
          {children}
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <CommentsComp/>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    backgroundColor: 'red',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: '38%',
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default BottomModal;
