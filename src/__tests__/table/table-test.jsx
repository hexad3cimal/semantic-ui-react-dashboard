import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import Table from "../../components/view/Table/table.jsx";

configure({ adapter: new Adapter() });

jest.useFakeTimers();

const table = {
  aligned: true,
  right: true,
  celled: true,
  data: [
    ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
    ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
    ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
    ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
    ["Mason Porter", "Chile", "Gloucester", "$78,615"]
  ],
  headers: ["Name", "Country", "City", "Salary"]
};

describe("Component", () => {
  const getComponent = () => mount(<Table props={table} />);

  it("table rows rendered", () => {
    const wrapper = getComponent();
    const rows = wrapper.find("tr");
    expect(rows.length).toBe(7);
  });

  it("table columns rendered", () => {
    const wrapper = getComponent();
    expect(
      wrapper
        .find("td")
        .at(1)
        .text()
    ).toEqual("Niger");
  });
});
