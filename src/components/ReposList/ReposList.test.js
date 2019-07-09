import React from 'react';
import { shallow } from 'enzyme';

import ReposList from './ReposList';

describe('ReposList', () => {
  const wrapper = shallow(<ReposList />);
  it('renders without crashing', () => {
    console.log(wrapper.debug());
  });
  it('ul should has class .list', () => {
    expect(wrapper.find('ul').hasClass('list')).toBe(true);
  });
});
