import React, { useEffect, useState } from "react";
import { getToken } from "../auth/auth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import TemplateCard from "../components/templateCard/TemplateCard";

function Templates() {
  // State variables
  const [templates, setTemplates] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalClose, setModalClose] = useState(false);
  const [templateId, setTemplateId] = useState("");

  const navigate = useNavigate();

  // Fetching templates data on component mount or when modalIsOpen state changes
  useEffect(() => {
    const token = getToken();
    const config = {
      headers: { Authorization: token },
    };
    axios
      .get("https://capfinproject.onrender.com/api/v1/user/viewtemplates", config)
      .then((res) => {
        setTemplates(res.data.templates);
      })
      .catch((err) => console.log(err));
  }, [modalIsOpen]);

  // Custom styles for the modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Setting the app element for modal accessibility
  Modal.setAppElement("#root");

  // Function to handle deletion of a template
  const handleDelete = (id) => {
    setIsOpen(true);
    setTemplateId(id);
  };

  // Function to handle modal close request
  const onRequestClose = () => {
    setModalClose(true);
    setIsOpen(false);
  };

  // Function to handle confirmation of template deletion
  const onHandleConfirm = () => {
    axios
      .post(`https://capfinproject.onrender.com/api/v1/user/deletetemplate/${templateId}`)
      .then((res) => {
        console.log("successfully deleted");
        setModalClose(true);
        setIsOpen(false);
        toast.success("Successfully deleted group", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className='container'>
        <Sidebar />
        <Navbar />
        <section className='home'>
          <div style={{ marginTop: "100px" }}>
            {/* Button to navigate to new template page */}
            <button
              class='add-record-btn'
              onClick={() => navigate("/newtemplate")}
            >
              Add Template
            </button>
            {/* Mapping through templates to render TemplateCard components */}
            <div class='group-grid-container'>
              {templates.map((template) => (
                <TemplateCard
                  name={template.name}
                  handleDelete={handleDelete}
                  id={template._id}
                />
              ))}
            </div>
            {/* Modal for confirming template deletion */}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={modalClose}
              style={customStyles}
              contentLabel='Example Modal'
              className='modal'
              overlayClassName='modal-overlay'
            >
              <h2 className='modal-title'>Confirm Delete Template</h2>
              <p className='modal-text'>
                Are you sure you want to delete this template?
              </p>
              <div className='modal-buttons'>
                <button
                  className='modal-button cancel'
                  onClick={onRequestClose}
                >
                  Cancel
                </button>
                <button
                  className='modal-button delete'
                  onClick={onHandleConfirm}
                >
                  Delete
                </button>
              </div>
            </Modal>
            {/* Toast notifications */}
            <ToastContainer
              position='bottom-right'
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Templates;
