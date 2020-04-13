import React from "react";
import { shallow } from "enzyme";
import { VideoMetadata } from "../VideoMetadata";

describe("", () => {
  test("rendering video metadata without props", () => {
    const wrapper = shallow(<VideoMetadata />);
    expect(wrapper).toMatchSnapshot();
  });

  test("rendering video metadata without props", () => {
    const wrapper = shallow(<VideoMetadata viewCount={23} />);
    expect(wrapper).toMatchSnapshot();
  });
});
