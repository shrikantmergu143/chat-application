import React from 'react'
import PropTypes from 'prop-types';

export default function ImageIcon(props) {
  return (
    <i className={`common_image font-${props?.size} ${props?.className}`}/>
  )
}
ImageIcon.propTypes = {
    className: PropTypes.any,
    size: PropTypes.any,
}
ImageIcon.defaultProps = {
    className:"",
    size:"sm",
}