import React from "react";

//A simple javascript utility for conditionally joining classNames together
import classNames from "classnames";

function Button({ props }) {
  const { type, size, disabled, text, labeled, icon, iconClass } = props;

  const btnClasses = classNames(
    "ui",
    "button",
    size,
    type,
    disabled,
    labeled ? "labeled" : "",
    icon ? "icon" : ""
  );

  return (
    <button className={btnClasses}>
      {iconClass ? <i className={iconClass + " icon"} /> : ""}
      {text}
    </button>
  );
}

export default Button;
