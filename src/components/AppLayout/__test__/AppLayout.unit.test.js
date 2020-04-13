import React from "react";

import { shallow } from "enzyme";
import { AppLayout } from "../AppLayout";

describe("testing app layout snapshot", () => {
  test("rendering empty app layout", () => {
    const wrapper = shallow(<AppLayout />);

    expect(wrapper).toMatchSnapshot();
  });

  test("rendering app layout with a props children", () => {
    const wrapper = shallow(
      <AppLayout>
        <div>Hello world</div>
      </AppLayout>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
