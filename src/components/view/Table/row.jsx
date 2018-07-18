import React from "react";
import PropTypes from "prop-types";
import Column from "./column.jsx";

const Row = ({ values }) => (
  <tr>
    {values.map((d, k) => {
      return <Column value={d} />;
    })}
  </tr>
);

export default Row;
