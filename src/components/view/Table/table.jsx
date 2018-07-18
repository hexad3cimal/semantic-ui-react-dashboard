import React from "react";
import Row from "./row.jsx";
import Header from "./header.jsx";

//A simple javascript utility for conditionally joining classNames together
import classNames from "classnames";

function Table({ props }) {
  const { aligned, headers, values, right, left, data, celled } = props;

  const btnClasses = classNames(
    "ui",
    "table",
    aligned ? "aligned" : "",
    right ? "right" : "",
    left ? "left" : "",
    celled ? "celled" : ""
  );

  return (
    <table className={btnClasses}>
      <tr>
        <thead>
          {headers.map((v, k) => {
            return <Header value={v} />;
          })}
        </thead>
      </tr>
      <tbody>
        {data.map((v, k) => {
          return <Row values={v} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
