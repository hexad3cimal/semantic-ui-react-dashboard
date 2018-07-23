import React from "react";
import CardImage from "./cardimage.jsx";
import CardContent from "./cardcontent.jsx";

//A simple javascript utility for conditionally joining classNames together
import classNames from "classnames";

function BasicCard({ props }) {
  const { image, content } = props;

  const cardClasses = classNames("ui", "card");

  return (
    <div className={cardClasses}>
      {image ? <CardImage props={props} /> : null}
      {content ? <CardContent props={props} /> : null}
    </div>
  );
}

export default BasicCard;
