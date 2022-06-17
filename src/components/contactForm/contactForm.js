import s from "./contactForm.module.css";
import propTypes from "prop-types";
import React, { Component } from 'react';
import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
        name: '',
        number: '',
    }

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newObject = { name: name, number: number , id:nanoid()};
    this.props.data(newObject);

    this.setState({ name: '',number: ''});
  };

  render() {
    let nameId = nanoid();
    let numberId = nanoid();
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.contacts_label}>
          Name
          <br />
          <input
            className={s.input}
            type="text"
            name="name"
            id={nameId}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label className={s.contacts_label}>
          Number
          <br />
          <input
            className={s.input}
            type="tel"
            name="number"
            id={numberId}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  data: propTypes.func.isRequired,
};
