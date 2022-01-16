import css from "./ContactList.module.css";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";
const ContactList = ({ items, onDeleteContact }) => (
  <ul className={css.list}>
    {items.map((contact) => (
      <ContactItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={onDeleteContact}
      >
        <button
          className={css.button}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </ContactItem>
    ))}
  </ul>
);
ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string }))
    .isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
