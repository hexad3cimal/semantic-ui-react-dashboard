import React from "react";

//A simple javascript utility for conditionally joining classNames together
import classNames from "classnames";

function Button ({props}) { 
    const { type, size, disabled, text, icon, labeled, iconClass, dropdown, dropdownValues } = props;

    const btnClasses = classNames(
        "ui", 
        "button",
        size,
        type,
        disabled,
        labeled ? 'labeled' : '',
        icon ? 'icon' : '',
        dropdown
  );
    var dropdownLinks = ''

  if(dropdown){
    
        dropdownValues.forEach(v => {
             dropdownLinks = dropdownLinks +   <div className="item">v</div>
             debugger;
    })

  
    return (
        
         <div className="ui buttons">
        <button className= {btnClasses}>
            {text }
        </button>
         <div className="ui floating dropdown icon button" tabIndex="0">
           <i className="dropdown icon"></i>
           <div className="menu" tabIndex="-1">
           <div className="item">"v"</div>   
                   </div>
         </div>
       </div>
    )
        
    }
    else{

        return(
<button className= {btnClasses}>
    {(iconClass) ? <i className = {iconClass +" icon"}></i> :'' }
     {text }
    </button> 
        )
    }
        

    }
    
        
    
              
   


export default Button;