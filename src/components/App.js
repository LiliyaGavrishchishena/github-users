import React from 'react';
// componnets
import SearchFormContainer from './SearchForm/SearchFormContainer';
import GitHubListResultContainer from './GitHubListResult/GitHubListResultContainer';

const App = () => {
  return (
    <div>
      <SearchFormContainer />
      <GitHubListResultContainer />
    </div>
  );
};

export default App;
