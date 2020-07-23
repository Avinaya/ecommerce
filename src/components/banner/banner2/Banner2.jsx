import React from 'react'
import './Banner2.scss'
import { Link } from 'react-router-dom';

const Banner2 = () =>{
    return(

        <div className="banner2">
        
        <div className="banner2-item">
        <Link className="link" to="/">
        <img src={require("../../../image/television.jpg")} alt="tv"/>
        </Link>
        </div>
        <div className="banner2-item">
        <Link className="link" to="/">
        <img src={require("../../../image/Printers.jpg_B1z9iqMxw.jpg")} alt="printer"/>
        </Link>
        </div>

        </div>
    )
}
export default Banner2