import React, { forwardRef, useEffect, useState } from "react";

const VideoModal = forwardRef(({ isOpen, onClose }, ref) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px ve altını mobil olarak kabul ediyoruz
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isOpen || isMobile) return null;

  return (
    <div
      ref={ref}
      className={`video-modal ${isOpen ? "show" : ""}`}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "320px",
        height: "620px", // Adjusted for 16:9 aspect ratio
        zIndex: 1000,
        backgroundColor: "#000",
        borderRadius: "8px",
        overflow: "hidden",
        display: "block",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          zIndex: 1,
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          ✕
        </button>
      </div>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/_rgYLPwms9Y?autoplay=1&si=nKxSrxzajEis065Z"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
});

VideoModal.displayName = "VideoModal";

export default VideoModal;
