import React from "react";
import PropTypes from "prop-types";

const CardContent = ({ props }) => (
  <div className="content">
    {props.contentHeader ? (
      <div className="header"> {props.contentHeader} </div>
    ) : null}
    {props.contentMeta ? <div className="meta">{props.contentMeta}</div> : null}
    {props.contentDesc ? (
      <div className="description">{props.contentDesc}</div>
    ) : null}
  </div>
);

export default CardContent;
