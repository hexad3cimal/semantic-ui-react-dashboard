import React from "react";
import { shallow } from "enzyme";
import Table from "../../components/view/Table/table.jsx";

jest.useFakeTimers();

describe("Component", () => {
  const getComponent = () => shallow(<Table />);

  it("should call setInterval on mounting", () => {
    const component = getComponent();

    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000);
  });
});
