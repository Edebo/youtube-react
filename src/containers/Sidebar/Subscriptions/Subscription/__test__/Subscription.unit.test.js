import React from "react";
import { shallow } from "enzyme";
import { Subscription } from "../Subscription";

describe("tesing subscription snapshot", () => {
  test("rendering empty subscription", () => {
    const wrapper = shallow(<Subscription />);

    expect(wrapper).toMatchSnapshot();
  });

  test("rendering subscription when it is broadcasting", () => {
    const wrapper = shallow(<Subscription broadcasting label='udemy' />);

    expect(wrapper).toMatchSnapshot();
  });

  test("rendering subscription when non broadcasting ", () => {
    const wrapper = shallow(<Subscription amountNewVideos={4} label='udemy' />);

    expect(wrapper).toMatchSnapshot();
  });
});
