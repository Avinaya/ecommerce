import React from "react";
import "./StoreCard.scss";
import ProductRating from "./../../../components/rating/ProductRating";
import { useHistory } from "react-router-dom";

function StoreCardLayout(props) {
  const [display, setDisplay] = React.useState();
  const history = useHistory();

  const discountPercentage = () => {
    const percentage = Math.round(
      (props.data.discountPrice / props.data.salePrice) * 100
    );
    if (percentage === 0) {
      setDisplay(false);
    } else setDisplay(percentage);
  };
  React.useEffect(() => {
    discountPercentage();
  }, []);

  const handleOnClick = (param) => (e) => {
    e.preventDefault();
    history.push(`/product/${param}`);
  };

  return (
    <div
      className="storeCardLayout"
      onClick={handleOnClick(props.data.productId)}
    >
      <div className="storeCardLayout-item">
        <div className="storeCardLayout-item-image">
          <img src={props.data.thumbnail} alt="" />
        </div>
        <div className="storeCardLayout-item-name">{props.data.pName}</div>
        <div className="storeCardLayout-item-actualPrice">
          Rs.{props.data.salePrice}
        </div>
        <div className="storeCardLayout-item-growPrice">
          Rs.{props.data.salePrice + props.data.discountPrice}
        </div>
        <div
          className="storeCardLayout-item-discountPercentage"
          style={display ? {} : { display: "none" }}
        >
          - {display}%
        </div>
        <div className="storeCardLayout-item-rating">
          <ProductRating />
        </div>
      </div>
    </div>
  );
}

export default StoreCardLayout;
