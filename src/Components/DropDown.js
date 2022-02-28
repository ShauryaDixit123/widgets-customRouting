import React, { useEffect, useState, useRef } from "react";

function DropDown({ options, selectedOption, selectedOptionChange, label }) {
  const [closed, setClosed] = useState(true);
  const ref = useRef();

  const renderedOpt = options.map((opt, i) => {
    if (opt.value === selectedOption.value) {
      return null;
    }
    return (
      <div
        key={i}
        onClick={() => selectedOptionChange(opt)}
        data-value={i}
        className="item"
      >
        {opt.label}
      </div>
    );
  });

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setClosed(true);
    });
  }, []);
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${closed ? "" : "visible active"}`}
          onClick={() => setClosed(!closed)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selectedOption.label}</div>
          <div className={`menu ${closed ? "" : "visible transition"}`}>
            {renderedOpt}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DropDown;
