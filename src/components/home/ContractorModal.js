import React from "react";
import ContractorForm from "./ContractorForm";

const ContractorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="scrollableModal"
      tabIndex="-1"
      aria-labelledby="scrollableModalLabel"
      aria-hidden={!isOpen}
      style={{
        display: isOpen ? "block" : "none",
        backgroundColor: "black",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Taşeron Müteahhit Formu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="modal-body">
            <ContractorForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorModal;
