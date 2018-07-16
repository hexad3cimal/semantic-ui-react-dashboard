import React from "react";

//A simple javascript utility for conditionally joining classNames together
import classNames from "classnames";

function SideBarMenu ({props}) { 
    const { type, size,disabled } = props;

    const btnClasses = classNames(
        "ui", 
        "button",
        size,
        type,
        disabled
  );

    return (
    <button className= {btnClasses}>Default</button>
    )
              
   
}

export default SideBarMenu;