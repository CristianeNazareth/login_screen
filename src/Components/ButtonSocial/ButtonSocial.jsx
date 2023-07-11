import React from "react";
import './ButtonSocial.css';
import PropTypes from 'prop-types';

const ButtonSocial = (props) => {
  const {icon} = props;
  return (
    <div>
      {icon}
    </div>
)
}

ButtonSocial.propTypes = {
  icon: PropTypes.node.isRequired
}

export default ButtonSocial