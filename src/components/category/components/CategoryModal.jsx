import React from "react";
import styled from "styled-components";
import Modal from "../../modal/Modal";

const CategoryModal = ({ onClose }) => {
  return (
    <div>
      <Modal onClose={onClose}>
        <h1>This is a Modal Dialog</h1>
        <button onClick={onClose}>Close</button>
      </Modal>
    </div>
  );
};

export default CategoryModal;
