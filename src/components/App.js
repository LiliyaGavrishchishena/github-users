/* eslint camelcase: 0 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import API from '../services/api';

// styles
import styles from './App.module.css';

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
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter username in GitHub..."
            value={username}
            required
            onChange={this.handleChangeInput}
          />
          <button type="submit" className={styles.btn}>
            Get repositories
          </button>
        </form>
        {repos.length > 0 && (
          <ul className={styles.list}>
            {repos.map(({ id, html_url, description }) => (
              <li key={id} className={styles.item}>
                <a href={html_url}>{html_url}</a>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default withRouter(App);
