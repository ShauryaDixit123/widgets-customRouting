import React, { useState } from "react";
import "./Accordian.css";

function Accordian({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const onClickDrop = (i) => {
    setActiveIndex(i);
  };

  const eachItem = items.map((item, i) => {
    const active = activeIndex === i ? "active" : "";
    return (
      <div key={i} onClick={() => onClickDrop(i)}>
        <div className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui styled accordion">{eachItem}</div>
    </div>
  );
}
export default Accordian;
