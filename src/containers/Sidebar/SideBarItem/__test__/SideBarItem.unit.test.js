import React from "react";
import { shallow } from "enzyme";
import { SideBarItem } from "../SideBarItem";

describe("testing side bar item", () => {
  //   test("rendering side bar item withour props", () => {
  //     const wrapper = shallow(<SideBarItem />);

  //     expect(wrapper).toMatchSnapShot();
  //   });
  test("renders empty SideBarItem", () => {
    const wrapper = shallow(<SideBarItem />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders highlighted SideBarItem that navigates to /feed/trending", () => {
    const wrapper = shallow(
      <SideBarItem highlighted icon='fire' label='Trending' />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("render non-highlighted SideBarItem that navigates to /feed/trending", () => {
    const wrapper = shallow(<SideBarItem icon='fire' label='Trending' />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Renders highlighted SideBarItem with no navigation", () => {
    const wrapper = shallow(
      <SideBarItem highlighted icon='fire' label='Trending' />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
