import React from 'react';
// styles
import styles from './SearchForm.module.css';

const SearchFormView = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter username in GitHub..."
        />
        <button className={styles.btn}>Get repositories</button>
      </form>
    </div>
  );
};

export default SearchFormView;
