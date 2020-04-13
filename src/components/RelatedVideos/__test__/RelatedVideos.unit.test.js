import React from "react";
import { shallow } from "enzyme";
import { RelatedVideos } from "../RelatedVideos";

describe("", () => {
  test("rendering the related video component", () => {
    const wrapper = shallow(<RelatedVideos />);
    expect(wrapper).toMatchSnapshot();
  });
});
