import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="loader">
        {/* You can customize this part based on your desired preloader design */}
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;
