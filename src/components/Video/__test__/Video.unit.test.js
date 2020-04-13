import React from "react";
import { shallow } from "enzyme";
import { Video } from "../Video";

describe("testing video component", () => {
  test("rendering video with props id", () => {
    const wrapper = shallow(<Video id='HAuXJVI_bUs' />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders null if id in video component not specified ", () => {
    const wrapper = shallow(<Video />);

    expect(wrapper).toMatchSnapshot();
  });
});
