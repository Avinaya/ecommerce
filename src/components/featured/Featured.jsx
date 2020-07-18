import React from "react";
import "./Featured.scss";
import { Link } from 'react-router-dom';

const feature_data = [
  {
    image: "https://res.cloudinary.com/ds5zgwshl/image/upload/v1594972855/sample/kiddies_store_hzmgqz.jpg",
  },
  {
    image: "https://res.cloudinary.com/ds5zgwshl/image/upload/v1594972855/sample/swiss_kgdmsj.jpg",
  },
  {
    image: "https://res.cloudinary.com/ds5zgwshl/image/upload/v1594972860/sample/P_G_axgkpu.jpg",
  },
  {
    image: "https://res.cloudinary.com/ds5zgwshl/image/upload/v1594972855/sample/nadore_ahqcjf.jpg",
  },
  {
    image: "https://res.cloudinary.com/ds5zgwshl/image/upload/v1594972855/sample/ganby_emxzlg.jpg",
  },
  {
    image: "https://res.cloudinary.com/ds5zgwshl/image/upload/v1594972857/sample/tshirt_jnugnb.jpg",
  },
];

function Featured() {
  return (
    <React.Fragment>
      <div className="featured">
      {feature_data.map((val,index)=>{
        return(
          
          <div key={index} className="featured-item">
          <Link className="link" to="/">
                <img  src={val.image} alt="" />
                </Link>
          </div>
          )
        })}
              
        </div>
    </React.Fragment>
  );
}

export default Featured;
