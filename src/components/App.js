import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import API from '../services/api';
import SearchInput from './SearchInput/SearchInput';
import ReposList from './ReposList/ReposList';

class App extends Component {
  state = { username: '', repos: [] };

  componentDidMount() {
    const { location } = this.props;
    const { username } = this.state;

    const parsed = queryString.parse(location.search);

    if (parsed.username && parsed.username !== username) {
      this.setState({ username: parsed.username });
    }
    API.getReposOfUser(username).then(
      data => Array.isArray(data) && this.setState({ repos: data }),
    );
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

    API.getReposOfUser(username).then(
      data => Array.isArray(data) && this.setState({ repos: data }),
    );
  };

  render() {
    const { repos, username } = this.state;
    return (
      <div>
        <SearchInput
          username={username}
          onChange={this.handleChangeInput}
          onSubmit={this.handleSubmit}
        />
        {repos.length > 0 && <ReposList repos={repos} />}
      </div>
    );
  }
}

export default withRouter(App);
