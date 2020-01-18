import React from 'react';
import PropTypes from 'prop-types';

export const GetError = (props) => {
  const { code } = props;
  return (
    <>
      {code.length === 4 ? (
        <p className="error">number must contain 9 digits</p>
      ) : (
        ' '
      )}

      {code.length === 3 ? (
        <p className="error">number must contain 10 digits</p>
      ) : (
        ' '
      )}
      {code.length === 2 ? (
        <p className="error">number must contain 11 digits</p>
      ) : (
        ' '
      )}
    </>
  );
};

GetError.propTypes = {
  code: PropTypes.string.isRequired
};
