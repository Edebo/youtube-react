import React from "react";
import { shallow } from "enzyme";
import { Watch } from "../Watch";

describe("", () => {
  test("rendering the watchcomponent", () => {
    const wrapper = shallow(<Watch />);
    expect(wrapper).toMatchSnapshot();
  });
});
