import "./ProductDetailMenuReview.scss";
import React from "react";
import Rating from "./../../../../components/rating/rating";
function UserReview(props){

    return(
        <div>
                <div className="productDetailMenuContent-reviews">
        <div className="productDetailMenuContent-reviews-head">
            "{props.title}"
        </div>
        <div className="productDetailMenuContent-content-rating-count-five">
                        <div><Rating data={props.rating}/></div>
                                               
                    </div>
        <div className="productDetailMenuContent-reviews-body">{props.body} </div>
        <div className="productDetailMenuContent-reviews-user">By {props.user}</div>
         </div>

        </div>
    );
}
export default UserReview;
