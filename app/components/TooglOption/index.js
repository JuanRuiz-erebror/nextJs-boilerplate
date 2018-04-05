/**
*
* ToggleOption
*
*/

import React from 'react';
import PropTypes from 'prop-types';

const ToggleOption = ({ value, message }) => (
  <option value={value}>
    {message ? message : value}
  </option>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default ToggleOption;