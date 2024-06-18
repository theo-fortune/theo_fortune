import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="works" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Demo <BsArrowRightShort className="work__button-icon"/>
      </a>
    </div>
  );
};

export default WorksItems;
