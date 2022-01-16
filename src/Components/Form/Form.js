import React, { Component } from "react";
import css from "./Form.module.css";
import shortid from "shortid";
class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label>
            <p className={css.text}>Name</p>
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={css.input}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label>
            <p className="Form__text">Number</p>
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={css.input}
              onChange={this.handleChange}
              id={this.numberInputId}
            />
          </label>

          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
