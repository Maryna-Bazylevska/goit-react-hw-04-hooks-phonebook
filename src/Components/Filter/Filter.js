import css from "./Filter.module.css";
import PropTypes from "prop-types";
const Filter = ({ value, onChange }) => (
  <div className={css.filter}>
    <label>
      <p className={css.text}>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
