import React from 'react';
import PropTypes from 'prop-types';
import s from "../contactList/contactList.module.css";

const ContactsItem = ({ name, number, id, onDeleteContact }) => (
  <div className={s.item} >
    <h3>{name}</h3>
    <p>{number}</p>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </div>
);

export default ContactsItem;

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

