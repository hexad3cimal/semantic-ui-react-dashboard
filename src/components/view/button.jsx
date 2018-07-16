import React from "react";

//A simple javascript utility for conditionally joining classNames together
import classNames from "classnames";

function Button ({props}) { 
    const { type, size,disabled,text } = props;

    const btnClasses = classNames(
        "ui", 
        "button",
        size,
        type,
        disabled
  );

    return (
    <button className= {btnClasses}>{text}</button>
    )
              
   
}

export default Button;