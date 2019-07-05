import React, { Component } from 'react';
// components
import GitHubListResultView from './GitHubListResultView';

const INITIAL_STATE = {
  repos: [],
};

export default class GitHubListResultContainer extends Component {
  state = { ...INITIAL_STATE };

  render() {
    const { repos } = this.state;
    return (
      <div>
        <GitHubListResultView repos={repos} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
