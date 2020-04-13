import React from "react";
import { shallow } from "enzyme";
import { NextUpVideo } from "../NextUpVideo";

describe("testing nextvideo component", () => {
  test("rendering the next up component", () => {
    const wrapper = shallow(<NextUpVideo />);
    expect(wrapper).toMatchSnapshot();
  });
});
