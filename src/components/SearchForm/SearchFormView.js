import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from './SearchForm.module.css';

const SearchFormView = ({ onSubmit }) => {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter username in GitHub..."
          required
        />
        <button type="submit" className={styles.btn}>
          Get repositories
        </button>
      </form>
    </div>
  );
};

SearchFormView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchFormView;
