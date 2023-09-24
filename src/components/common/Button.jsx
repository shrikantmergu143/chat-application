import React from 'react'
import PropTypes from "prop-types"
import {Button as CommonButton} from 'rsuite';
export default function Button(props) {
  return (
    <CommonButton appearance={props?.variant} size={props?.size} className={` ${props?.className}`} onClick={props?.onClick} type={props?.type} >
      {props?.children}
    </CommonButton>
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
    size: "lg",
    type: "button",
    className: "",
    variant: "",
    onClick: ()=>{},
}