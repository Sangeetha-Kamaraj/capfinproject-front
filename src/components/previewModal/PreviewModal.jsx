import React, { useState } from "react";
import Modal from "react-modal";
import HTMLRenderer from "react-html-renderer";

const customStyles = {
  content: {
    top: "55%", 
    left: "50%", 
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)", 
    height: "75%", 
  },
};

Modal.setAppElement("#root"); 

function PreviewModal({ view, closeView, code }) {
  const [modalIsOpen] = useState(view);
  const [closeModal] = useState(false);

  const html = code ? `${code}` : "<p>Enter any code </p>";

  return (
    <div>
      <Modal
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        style={customStyles} 
        contentLabel='Example Modal' 
      >
        <div className='modal-container-preview'>
          <h2 style={{ padding: "20px" }}>Preview</h2>
          <div className='preview-container'>
            {/* Render HTML content */}
            {modalIsOpen ? <HTMLRenderer html={html} /> : ""}
          </div>
          <button
            className='preview_md_btn'
            type='button'
            onClick={() => closeView(false)} 
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default PreviewModal;
