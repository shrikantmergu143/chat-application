import React from 'react'
import PropTypes from 'prop-types';
import { IconButton } from 'rsuite';

export default function Icon(props) {
  if(props?.button){
    return(
      <IconButton circle={props?.circle} active={props?.active} size={'md'} ripple icon={<i className={`common_icon font-${props?.size} ${props?.className}`}/>} >

      </IconButton>
      // <button className='icon-btn btn-light button-effect ng-star-inserted' >
      //   <i className={`common_icon font-${props?.size} ${props?.className}`}/>
      // </button>
    )
  }
  return (
    <i className={`common_icon font-${props?.size} ${props?.className}`}/>
  )
}
Icon.propTypes = {
  className: PropTypes.any,
  size: PropTypes.any,
  active: PropTypes.any,
  circle: PropTypes.any,
}
Icon.defaultProps = {
  className:"",
  size:"sm",
  active:false,
  circle:false,
}