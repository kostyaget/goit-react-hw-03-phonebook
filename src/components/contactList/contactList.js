import React from 'react';
import ContactsItem from "../contactItem";
import PropTypes from "prop-types";
import s from "./contactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list_block}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <ContactsItem name={name} id={id} number={number} onDeleteContact={ onDeleteContact}/>
        <ContactsItem
          name={name}
          id={id}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;