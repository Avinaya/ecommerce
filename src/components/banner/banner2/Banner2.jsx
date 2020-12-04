import React, { useEffect, useState } from "react";
import "./Banner2.scss";
import { Link } from "react-router-dom";

const Banner2 = (props) => {
  const [images, setImages] = useState({ image1: "", image2: "" });

  useEffect(() => {
    if (props.banner) {
      setImages({
        ...images,
        image1: props.banner.image1,
        image2: props.banner.image2,
      });
    } else {
      setImages({
        ...images,
        image1: require("../../../image/television.jpg"),
        image2: require("../../../image/Printers.jpg_B1z9iqMxw.jpg"),
      });
    }
  }, [props.banner]);

  return (
    <div className="banner2">
      <div className="banner2-item">
        <Link className="link" to="/">
          <img src={images.image1} alt="tv" />
        </Link>
      </div>
      <div className="banner2-item">
        <Link className="link" to="/">
          <img src={images.image2} alt="printer" />
        </Link>
      </div>
    </div>
  );
};
export default Banner2;
