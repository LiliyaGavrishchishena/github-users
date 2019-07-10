import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('renders without crashing', () => {
    shallow(<SearchInput />);
  });
  it('it has input', () => {
    const wrapper = shallow(<SearchInput />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('button').length).toBe(1);
  });
});
