import React from "react";
import "./top.css";
import { BsArrowUpShort } from "react-icons/bs";

const Top = () => {
  window.addEventListener("scroll", function () {
    const top = document.querySelector(".top");
    if (this.scrollY >= 560) top.classList.add("show-top");
    else top.classList.remove("show-top");
  });
  return (
    <a href="#home" className="top">
      <BsArrowUpShort className="top-icon" />
    </a>
  );
};

export default Top;
