import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

const ResponsiveModal = styled(Modal)`
  &.modal {
    padding-right: 0 !important;
  }

  .modal-dialog {
    max-width: 90%;
    margin: 1.75rem auto;
  }

  .modal-content {
    padding: 1rem;
  }

  .modal-body {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
  }

  @media (min-width: 576px) {
    &.modal {
      padding-right: 10px !important;
    }
    .modal-dialog {
      max-width: 500px;
    }
  }

  @media (min-width: 768px) {
    &.modal {
      padding-right: 20px !important;
    }
  }

  @media (min-width: 992px) {
    &.modal {
      padding-right: 30px !important;
    }
    .modal-dialog {
      max-width: 800px;
    }
  }

  @media (min-width: 1200px) {
    &.modal {
      padding-right: 340px !important;
    }
  }
`;

const ModalComponent = ({ show, handleClose, children }) => {
  return (
    <ResponsiveModal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Event Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </ResponsiveModal>
  );
};

export default ModalComponent;