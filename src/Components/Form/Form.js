import { useState } from "react";
import css from "./Form.module.css";
import PropTypes from "prop-types";
import shortid from "shortid";
export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
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
            onChange={handleChange}
            id={nameInputId}
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
            onChange={handleChange}
            id={numberInputId}
          />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
