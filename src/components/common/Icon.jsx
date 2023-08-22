import React from 'react'
import PropTypes from 'prop-types';

export default function Icon(props) {
  return (
    <i className={`common_icon font-${props?.size} ${props?.className}`}/>
  )
}
Icon.propTypes = {
    className: PropTypes.any,
    size: PropTypes.any,
}
Icon.defaultProps = {
    className:"",
    size:"sm",
}