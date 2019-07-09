import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

describe('First React component test with Enzyme', () => {
  const wrapper = shallow(<App />);
  it('renders without crashing', () => {
    console.log(wrapper.debug());
  });
  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
