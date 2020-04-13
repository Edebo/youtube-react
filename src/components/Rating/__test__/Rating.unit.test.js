import React from "react";
import { shallow } from "enzyme";
import { Rating } from "../Rating";

describe("", () => {
  test("rendering the app component", () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper).toMatchSnapshot();
  });
});
