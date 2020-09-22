import React, { useEffect, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import axios from "axios";

function Rating(props){
  const [rating,setRating]=useState(props.data);
  
 
  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  }
  return (                
    <div>
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={props.data}
        onStarClick={onStarClick}
      />
    </div>
  );
}

 export default Rating;