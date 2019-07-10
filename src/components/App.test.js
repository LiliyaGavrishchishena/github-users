import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('renders without crashing', () => {
    console.log(wrapper.debug());
  });
  it('matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
