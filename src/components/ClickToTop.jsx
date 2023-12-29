import { useState, useEffect } from "react";
import React from "react";

const ClickToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100;
    setVisible(scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="back-to-top-group"
      style={{ display: visible ? "block" : "none" }}
      onClick={handleButtonClick}
    >
      <button className="back-to-top-btn">&and;</button>
      <p className="txt-back-to-top">Back to Top</p>
    </div>
  );
};

export default ClickToTop;
