import { useState, useEffect } from "react";
import React from "react";

const ClickToTop = () => {
  // Function to handle the button click
  const [visible, setVisible] = useState(false);
  // Function to handle the button click
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle scroll events
  const handleScroll = () => {
    // Show/hide the button based on the scroll position
    const scrollY = window.scrollY;
    const threshold = 100; // Adjust this value based on your preference

    setVisible(scrollY > threshold);
  };

  // Attach scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* <div
        className="back-to-top-group"
        style={{ display: visible ? "block" : "none" }}
      >
        <span></span>
        
        <span className="back-to-top-text">Back to top</span>
      </div> */}
      <button
        onClick={handleButtonClick}
        className="back-to-top-group"
        style={{ display: visible ? "block" : "none" }}
      >
        &and;
      </button>
      ;
    </div>
  );
};

export default ClickToTop;
