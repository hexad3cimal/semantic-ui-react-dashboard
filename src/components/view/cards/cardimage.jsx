import React from "react";
import PropTypes from "prop-types";

const CardImage = ({ props }) => (
  <div className="image">
    {props.imageContent ? (
      <div className="ui blurring dimmer transition hidden">
        <div className="content">
          <div className="center">{props.imageContent}</div>
        </div>
      </div>
    ) : null}
    <img src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" />
  </div>
);

export default CardImage;
