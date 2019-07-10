/* eslint camelcase: 0 */
import React from 'react';
// styles
import styles from './ReposList.module.css';

const ReposList = ({ repos = [] }) => {
  return (
    <ul className={styles.list}>
      {repos.map(({ id, html_url, description }) => (
        <li key={id} className={styles.item}>
          <a href={html_url}>{html_url}</a>
          <p>
            {description}
            {html_url}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ReposList;
