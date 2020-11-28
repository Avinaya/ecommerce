import React from "react";
import "./Store.scss";
import { Link, useHistory } from "react-router-dom";

const feature_data = [
  {
    image:
      "http://res.cloudinary.com/ds5zgwshl/image/upload/v1606565952/hnjkzwe3gvgeg37cc9ia.jpg",
    name: "Pashmina shawls",
    rating: "4",
  },
  {
    image:
      "http://res.cloudinary.com/ds5zgwshl/image/upload/v1606565984/jiwavv82yvkzrhkmhgpc.jpg",
    name: "Singing Bowls",
    rating: "5",
  },
  {
    image:
      "http://res.cloudinary.com/ds5zgwshl/image/upload/v1606566020/o0n4fb6lgelyvvloezvc.jpg",
    name: "The Gurkha knife",
    rating: "3",
  },
  {
    image:
      "http://res.cloudinary.com/ds5zgwshl/image/upload/v1606566062/rkz9auwfk130t811jrwj.jpg",
    name: "Rice Paper Products",
    rating: "2",
  },
  {
    image:
      "http://res.cloudinary.com/ds5zgwshl/image/upload/v1606566103/fskwh0n0h9iyrutex898.jpg",
    name: "Beads and jewellery",
    rating: "4",
  },
  {
    image:
      "http://res.cloudinary.com/ds5zgwshl/image/upload/v1606566137/azmqrdxuksoi99keg2tb.jpg",
    name: "Handicrafts",
    rating: "5",
  },
];

function Store() {
  const history = useHistory();

  const handleClick = (param) => (e) => {
    e.preventDefault();
    history.push(`/store/${param.replace(/ /g, "-")}`);
  };
  return (
    <div className="store">
      <div className="store-heading">
        <h5 className="d-inline store-heading-title ">Featured Stores</h5>
        <Link to="/" className="store-heading-btn">
          Browse All Stores
        </Link>
      </div>
      <div className="store-tools">
        {feature_data.map((val, index) => {
          return (
            <div
              key={index}
              className="store-tools-item"
              onClick={handleClick(val.name)}
            >
              <img src={val.image} alt={val.name} />
              <span>{val.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
