import * as React from "react";
import * as renderer from "react-test-renderer";
import {Header} from "./Header";

it('Should render correctly with the text "1 item"', () => {
    const tree = renderer
        .create(<Header noteCount={1}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Should render correctly with the text "2 items"', () => {
    const tree = renderer
        .create(<Header noteCount={2}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});