const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Modal açık değilse hiçbir şey render etme

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
              TANITIM VİDEOSU
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
                <div className="col-md-12">
                  <div className="video-container">
                    <iframe
                      width="1120"
                      height="630"
                      src="https://www.youtube.com/embed/_rgYLPwms9Y?si=nKxSrxzajEis065Z"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
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

export default VideoModal;
