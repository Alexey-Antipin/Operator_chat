import React from "react";
import Auth from "../components/auth/Auth";
import { shallow } from 'enzyme';

it("Component Auth render", () => {
    const component = shallow(<Auth />);
    const wrapper = component.find(".Auth");
    expect(wrapper.length).toBe(1);
});