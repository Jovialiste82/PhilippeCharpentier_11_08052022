import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({ content, title }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className='accordion-title' onClick={toggleAccordion}>
        <h5>{title}</h5>
        <span className={`chevron chevron-${open ? "up" : "down"}`}></span>
      </div>
      <div className={`accordion-content accordion-${open ? "on" : "off"}`}>
        {typeof content === "string" ? (
          <p>{content}</p>
        ) : (
          <ul>
            {content.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Accordion;
