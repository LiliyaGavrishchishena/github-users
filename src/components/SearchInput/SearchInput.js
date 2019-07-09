import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from './SearchInput.module.css';

const SearchInput = ({ username, onSubmit, onChange }) => {
  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter username in GitHub..."
          value={username}
          required
          onChange={onChange}
        />
        <button type="submit" className={styles.btn}>
          Get repositories
        </button>
      </form>
    </div>
  );
};

SearchInput.propTypes = {
  username: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchInput;
