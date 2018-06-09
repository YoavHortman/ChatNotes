import * as React from "react";
import * as renderer from "react-test-renderer";
import {Footer} from "./Footer";

it('Should render', () => {
    const tree = renderer
        .create(<Footer onCreateMessage={() => {
        }}/>).toJSON();

    expect(tree).toMatchSnapshot();
});