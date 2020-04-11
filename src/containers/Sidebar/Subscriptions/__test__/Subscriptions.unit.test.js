import React from "react";
import { shallow } from "enzyme";
import { Subscriptions } from "../Subscriptions";

test("rendering subscription component", () => {
  const wrapper = shallow(<Subscriptions />);

  expect(wrapper).toMatchSnapshot();
});
