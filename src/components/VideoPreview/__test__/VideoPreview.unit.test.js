import React from "react";
import { shallow } from "enzyme";
import { VideoPreview } from "../VideoPreview";

describe("VideoPreview", () => {
  test("renders video preview vertically", () => {
    const wrapper = shallow(<VideoPreview />);
    expect(wrapper).toMatchSnapshot();
  });

  test("rendering video preview horinzontally", () => {
    const wrapper = shallow(<VideoPreview horinzontal={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
