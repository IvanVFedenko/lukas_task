import React from 'react';
import PropTypes from 'prop-types';

export const Phone = (props) => {
  const { phone, handle_input, get_error, no_error, code } = props;

  return (
    <>
      <input
        className="select_input"
        placeholder={
          code.length === 2
            ? '(xxxx) xxx-xxxx'
            : code.length === 3
            ? '(xxx) xxx-xxxx'
            : '(xx) xxx-xxxx'
        }
        type="text"
        value={phone}
        onChange={handle_input}
        onBlur={
          phone.length === 13 || phone.length === 14 || phone.length === 15
            ? no_error
            : get_error
        }
      ></input>
    </>
  );
};

Phone.propTypes = {
  phone: PropTypes.string.isRequired,
  handle_input: PropTypes.func.isRequired,
  get_error: PropTypes.func.isRequired,
  no_error: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired
};
