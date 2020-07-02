import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ data, onDeleteContact }) => (
  <ul>
    {data.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        deleteContact={() => onDeleteContact(id)}
      />
    ))}
  </ul>
);

export default ContactList;
