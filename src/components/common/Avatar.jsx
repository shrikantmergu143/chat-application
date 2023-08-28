import React from 'react'
import PropTypes from "prop-types";
import DefaultImage from "./../../assets/img/default_image.png"
import LazyImage from './LazyImage';

export default function Avatar(props) {
  const As = 'div';
  const AvatarLoad = () =>{
    if(props?.text){
      return(
        <span className="avatar-text">{props?.text}</span>
      )
    }
    return(
      <LazyImage src={props?.src} className="avatar-img" loading='lazy' onError={(e)=>e.target.src = props?.errorImage}/>
    )
  }
  
  return (
    <As className={`avatar avatar-${props?.variant}`} onClick={props?.onClick}>
      {AvatarLoad()}
    </As>
  )
}
Avatar.propTypes = {
  as: PropTypes.any,
  src: PropTypes.any,
  onClick: PropTypes.any,
  errorImage: PropTypes.any,
  variant: PropTypes.any,
}
Avatar.defaultProps = {
  as:"div",
  src: DefaultImage,
  onClick:()=>{},
  errorImage: DefaultImage,
  variant:"",
}