import React, { useState, useRef } from "react";

import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);
  const hasLink = props.special_text;

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <svg
          className={`${setRotate}`}
          height={24}
          width={24}
          fill={"white"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512">
          <path
            fill={props.fill}
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          />
        </svg>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content">
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        {hasLink ? (
          <span>
            <div className="accordion__text">
              <p>
                If you want to get involved, email us at{" "}
                <a
                  href="mailto:partnership@tedxuw.com"
                  style={{ color: "red" }}>
                  partnership@tedxuw.com
                </a>{" "}
                and we can help you out!
              </p>
            </div>
          </span>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Accordion;
