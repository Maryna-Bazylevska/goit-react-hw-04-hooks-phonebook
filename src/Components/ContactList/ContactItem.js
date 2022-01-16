import css from "./ContactList.module.css";
import PropTypes from "prop-types";

function ContactItem({ name, number, children }) {
  return (
    <li className={css.item}>
      {name}: {number}
      {children}
    </li>
  );
}
ContactItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default ContactItem;
