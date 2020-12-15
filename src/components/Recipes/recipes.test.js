import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Recipes from './Recipes';

const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });

describe(`Recipes Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Recipes />, section);
        ReactDOM.unmountComponentAtNode(section);
    });
    it(`onSubmit callback is fired when button is clicked`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<Recipes onClick={callback} />);
        wrapper.find('#search-btn').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});