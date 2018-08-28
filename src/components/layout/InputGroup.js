import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames'

const InputGroup = ({ label, name, value, placeholder, type, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        className={classnames('form-control', {'is-invalid': error})}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
}

InputGroup.defaultProps = {
  type: 'text'
}

export default InputGroup;
