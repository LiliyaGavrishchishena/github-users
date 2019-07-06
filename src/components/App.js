import React, { Component } from 'react';
// componnets
import SearchFormContainer from './SearchForm/SearchFormContainer';
import GitHubListResultContainer from './GitHubListResult/GitHubListResultContainer';

export default class App extends Component {
  state = { repos: [] };

  render() {
    const { repos } = this.state;
    return (
      <div>
        <SearchFormContainer />
        <GitHubListResultContainer items={repos} />
      </div>
    );
  }
}
