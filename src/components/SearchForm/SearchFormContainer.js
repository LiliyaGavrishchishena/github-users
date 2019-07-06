import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
// components
import SearchFormView from './SearchFormView';

class SearchFormContainer extends Component {
  state = { username: '' };

  componentDidMount() {
    const { location } = this.props;
    const { username } = this.state;

    const parsed = queryString.parse(location.search);

    if (parsed.username && parsed.username !== username) {
      this.setState({ username: parsed.username });
    }
    // fetchUserRepos(username)
  }

  handleChangeInput = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { history, location } = this.props;
    const { username } = this.state;

    const usernameString = queryString.stringify({ username });

    history.push({
      pathname: location.pathname,
      search: usernameString,
    });
    // fetchUserRepos(username)
  };

  render() {
    const { username } = this.state;

    return (
      <div>
        <SearchFormView
          onSubmit={this.handleSubmit}
          inputValue={username}
          handleChangeInput={this.handleChangeInput}
        />
      </div>
    );
  }
}

export default withRouter(SearchFormContainer);
