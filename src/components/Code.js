import React from 'react';
import PropTypes from 'prop-types';

export const Code = (props) => {
  const { country } = props;
  return <option value={country.callingCode}>{country.callingCode}</option>;
};

Code.propTypes = {
  country: PropTypes.object.isRequired
};
