import React from "react";
import PropTypes from "prop-types";
//A simple javascript utility for conditionally joining classNames together
import classNames from "classnames";

function Input({ props }) {
  const {
    type,
    right,
    left,
    icon,
    placeholder,
    label,
    iconName,
    corner
  } = props;

  const inputClasses = classNames(
    "ui",
    "input",
    right ? "right" : "",
    left ? "left" : "",
    icon ? "icon" : "",
    label ? "labeled" : "",
    corner ? "corner" : ""
  );

  return (
    <div className={inputClasses}>
      {!corner && label && <a className="ui label">{label}</a>}
      {icon && <i className={iconName + " icon"} />}
      <input placeholder={placeholder} type={type} />
      {corner && (
        <div className="ui corner label">
          <i className={iconName + " icon"} />
        </div>
      )}
    </div>
  );
}
export default Input;
