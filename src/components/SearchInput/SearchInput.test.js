import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('renders without crashing', () => {
    shallow(<SearchInput />);
  });
});
