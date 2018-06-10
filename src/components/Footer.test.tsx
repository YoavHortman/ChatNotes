import * as React from "react";
import {Footer} from "./Footer";
import {shallow} from "enzyme";

it('Should render', () => {
    Enzyme.configure()
    const component = shallow(<Footer onCreateMessage={() => {}}/>);
    component.find('input').simulate('keypress', {key: 'Enter'});

    expect(JSON.stringify(component)).toMatchSnapshot();
});