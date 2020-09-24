import React, { useEffect, useRef, useState } from "react";
import "./AddReview.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddReview(props) {
  const history = useHistory();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [customerId] = useState(user.id);
  const [productId] = useState(props.location.state.id);
  const firstRender = useRef(true);
  const [disabled, setDisabled] = useState(true);
  const [ratingError, setRatingError] = useState(null);
  const [reviewError, setReviewError] = useState(null);
  const [reviewTitleError, setReviewTitleError] = useState(null);
  const [rating, setRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState();
  const [review, setReview] = useState();
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setDisabled(formValidation());
  }, [rating, review, reviewTitle]);
  const formValidation = () => {
    if (rating === "") {
      setRatingError("Rating cant be blank!");
      return true;
    }
    if (review === "") {
      setReviewError("Review cant be blank!");
      return true;
    }
    if (reviewTitle === "") {
      setReviewTitleError("Review title cant be blank!");
      return true;
    } else {
      setRatingError(null);
      setReviewError(null);
      setReviewTitleError(null);
      return false;
    }
  };
  const handleSave = () => {
    axios("https://saptasoch.herokuapp.com/rating", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: { customerId, productId, rating, review, reviewTitle },
    });
    history.push(`/product/${props.location.state.id}`);
  };
  return (
    <div className="addReview">
      <form onSubmit={handleSave}>
        <div className="addReview-title">
          <span>Write a Review</span>
        </div>
        <div className="addReview-sub">
          <spa>
            Rate and Review:share details of your experience at this product.
          </spa>
        </div>
        <div className="addReview-product">
          <span>Product name</span>
        </div>
        <div className="addReview-name">
          <span>{props.location.state.name}</span>
        </div>
        <div className="addReview-star">
          <span>Rating star()</span>
          <div>
            <select
              className="addReview-star-select"
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </div>
        </div>
        <div className="addReview-reviewTitle">
          <span>Review Title</span>
          <div>
            <input
              type="text"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              className="addReview-reviewTitle-input"
              placeholder="Add Review Title"
            />
            {reviewTitleError && <p>{reviewTitleError}</p>}
          </div>
        </div>
        <div className="addReview-review">
          <span>Review</span>
          <div>
            <input
              className="addReview-review-input1"
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Add Review"
              required
            />
            {reviewError && <p>{reviewError}</p>}
          </div>
        </div>
        <div className="addReview-button">
          <button type="submit" disabled={disabled}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddReview;
