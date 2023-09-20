import React from 'react'
import PropTypes from "prop-types"

export default function Button(props) {
  return (
    <button className={`btn btn-block btn-${props?.size} btn-${props?.variant} ${props?.className}`} onClick={props?.onClick} type={props?.type} >
      {props?.children}
    </button>
  )
}
Button.propTypes = {
    size: PropTypes.any,
    type: PropTypes.any,
    className: PropTypes.any,
    variant: PropTypes.any,
    onClick: PropTypes.func,
}
Button.defaultProps = {
    size: "md",
    type: "button",
    className: "",
    variant: "",
    onClick: ()=>{},
}