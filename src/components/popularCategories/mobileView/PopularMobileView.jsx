import React from 'react'
import './PopularMobileView.scss'

export default function PopularMobileView(props) {
    return (
        <div className="popularMobileView">
        <span>{props.data.subHeading}</span>
        <img src={props.data.imageBack} alt=""/>        
        </div>
    )
}
