import React from "react";

import { shallow } from "enzyme";

import Sidebar from "../Sidebar";

test("rendering sidebar component", () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper).toMatchSnapshot();
});
