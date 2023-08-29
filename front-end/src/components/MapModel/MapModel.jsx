import React from 'react';
import Modal from 'react-modal';
import SelectMap from '../Map/SelectMap';

Modal.setAppElement('#root'); // Set the app root element for accessibility

const MapModel = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Map Modal"
      className="custom-modal" // Add a class name for custom styling
      overlayClassName="custom-overlay" // Add a class name for overlay styling
    >
      <div className="modal-content">
        <SelectMap />
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default MapModel;
