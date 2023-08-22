import React from 'react'
import {Link as LinkTab} from "react-router-dom"

export default function Link(props) {
    const prop = {};
    if(props?.to){
        prop.to = props?.to
    }
    if(props?.onClick){
        prop.onClick = props?.onClick
    }

  return (
    <LinkTab {...prop} >
      {props?.children}
    </LinkTab>
  )
}
