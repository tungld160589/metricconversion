import { useState, useEffect } from "react";
import React from "react";

const ClickToTop = () => {
  const [visible, setVisible] = useState(false);
  // trở về top khi click
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // xử lý sự kiện scroll y thay đổi trạng thái visible của button khi giá trị y >100
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100;
    setVisible(scrollY > threshold);
  };

  useEffect(() => {
    //Gọi function cập nhật giá trị của Y và thực thi khi xuất hiện sự kiện scroll
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
      <button className="back-to-top-btn">&#11165;</button>
      <p className="txt-back-to-top">BACK TO TOP</p>
    </div>
  );
};

export default ClickToTop;
