const ModelDetails = ({ isOpen, onClose, model }) => {
  if (!isOpen) return null; // Modal açık değilse hiçbir şey render etme
  console.log(model);
  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="scrollableModal"
      tabIndex="-1"
      aria-labelledby="scrollableModalLabel"
      aria-hidden={!isOpen}
      style={{
        display: isOpen ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }} // Transparan arka plan
    >
      <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header pb-4">
            <h5 className="modal-title ms-5" id="scrollableModalLabel">
              {model?.title || "Model Detayları"}
            </h5>
            <button
              type="button"
              className="btn-close me-5"
              onClick={onClose}
              aria-label="Close"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container project-view">
              <div className="row">
                <div className="col-md-8 project-images">
                  {model?.Images?.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={`Model Image ${index + 1}`}
                      className="img-responsive"
                    />
                  ))}
                </div>
                <div className="col-md-4">
                  <div className="project-info">
                    <h2>{model?.title || "Model Başlığı"}</h2>
                    <br />
                    <h2>{model?.area}m² Arsa İçin</h2>

                    <div className="details">
                      <div className="info-text">
                        <span className="title">
                          Zemin Kat Brüt Alan &nbsp;
                        </span>
                        <span className="val">
                          {model?.groundFloorGrossArea}m²
                        </span>
                      </div>

                      <div className="info-text">
                        <span className="title">Zemin Kat Teras &nbsp;</span>
                        <span className="val">
                          {model?.groundFloorTerrace}m²
                        </span>
                      </div>

                      <div className="info-text">
                        <span className="title">Havuz</span>
                        <span className="val">{model?.groundFloorPool}m²</span>
                      </div>

                      <div className="info-text">
                        <span className="title">1.Kat Brüt Alan &nbsp;</span>
                        <span className="val">
                          {model?.firstFloorGrossArea}m²
                        </span>
                      </div>

                      <div className="info-text">
                        <span className="title">
                          1.Kat Toplam Teras Alanı &nbsp;
                        </span>
                        <span className="val">
                          {model?.firstFloorTerrace}m²
                        </span>
                      </div>

                      <div className="info-text"></div>
                      <span className="title">Oda Sayısı</span>
                      <span className="val">{model?.roomCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
