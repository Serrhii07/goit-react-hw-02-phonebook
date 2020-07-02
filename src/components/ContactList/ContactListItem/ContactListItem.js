import React from 'react';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, deleteContact }) => (
  <li className={styles.contact_item}>
    {name}: {number}
    <button className={styles.contact_button} onClick={deleteContact}>
      Delete
    </button>
  </li>
);

export default ContactListItem;
