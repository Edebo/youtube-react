import React from "react";

import { shallow } from "enzyme";

import { SideBarHeader } from "../SideBarHeader";

describe("SideBarHeader", () => {
  test("testing empty side bar header", () => {
    const wrapper = shallow(<SideBarHeader />);

    expect(wrapper).toMatchSnapshot();
  });

  test("rendering side bar with props.title='/'", () => {
    const wrapper = shallow(<SideBarHeader title='/' />);

    expect(wrapper).toMatchSnapshot();
  });

  test("testing sidebar header with title props", () => {
    const wrapper = shallow(<SideBarHeader title='Library' />);

    expect(wrapper).toMatchSnapshot();
  });
});
