import Link from "next/link";
import React, { useState } from "react";
import ContractorModal from "./ContractorModal";

const Contractor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalın açık olup olmadığını kontrol etmek için durum ekle

  const handleLinkClick = () => {
    setIsModalOpen(true); // Modalı aç
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Modalı kapat
  };
  return (
    <section className="no-top no-bottom">
      <button
        type="button"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: 1000,
          borderRadius: "8px",
          overflow: "hidden",
          display: "block",
          fontSize: "20px",
        }}
        className="btn btn-primary p-3 text-white "
        onClick={() => handleLinkClick()}
      >
        İş Birliği
      </button>
      <ContractorModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default Contractor;
