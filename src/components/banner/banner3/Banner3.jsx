import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";

const image = [
  {
    image:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595744360/banner3/lenovo-2-logo-png-transparent_lntvf1.png",
  },
  {
    image:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595677175/banner3/Swiss.jpg_Ski1-4v08_s57nk8.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595677174/banner3/itec_u5nuo0.png",
  },
  {
    image:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595677174/banner3/samsung.jpg_rJxSILX_U_fhqbpc.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595677173/banner3/Nestle.jpg_Byqq5NAa8_yha1zv.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595677173/banner3/molflix.jpg_SJxBILmu8_mk4o4f.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595677173/banner3/apple.jpg_S1erII7OI_oroanc.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595677173/banner3/henkkel.jpg_S1hCK8zi8_iuht8t.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595677173/banner3/tecno.png_rya1kLL5H_eyxyj3.png",
  },
  {
    image:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595677173/banner3/Unilever.jpg_rJn0tIziI_wrydhq.jpg",
  },
 
];

export default function Banner3() {
  return (
    <div className="banner3">
      <div className="banner3-tools">
      {image.map((val,index) => {
          return(
            <Link key={index} className="link" to="/">
            <div className="banner3-tools-item">
                <img src={val.image} alt="img"/>
            </div>
            </Link>
          )
      })}
       
        
      </div>
    </div>
  );
}
