import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    <p className={styles.filter_text}>Find contacts by name</p>
    <input
      className={styles.filter_input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
