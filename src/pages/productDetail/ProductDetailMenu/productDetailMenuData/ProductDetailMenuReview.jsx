import React, { useEffect, useState } from 'react';
import axios from "axios";
import Rating from "./../../../../components/rating/rating";
import "./ProductDetailMenuReview.scss";
import UserReview from "./UserReview";
import { useHistory } from 'react-router-dom';
export default function ProductDetailMenuReview(props) {
    const [rating,setRating]=useState();
   
    const [count5,setCount5]=useState();
    const [count4,setCount4]=useState();
    const [count3,setCount3]=useState();
    const [count2,setCount2]=useState();
    const [count1,setCount1]=useState();
    const history=useHistory();

   const [review,setReview]=useState([]);
    useEffect(() => {
        axios.get(`https://saptasoch.herokuapp.com/rating/product/${props.data}`).then(response => {
            setReview(response.data);
            console.log("res",response.data);
            
          
        });
        axios.get(
            `https://saptasoch.herokuapp.com/rating/${props.data}`
          ).then(response=>{
            setRating(response.data.averageRating);
            
            setCount1(response.data.countOne);
            setCount2(response.data.countTwo);
            setCount3(response.data.countThree);
            setCount4(response.data.countFour);
            setCount5(response.data.countFive);
          });
        console.log("review",review);
        console.log("props",props.data);
    },[props.data]);
    const addReview=() => {
        
        const user=localStorage.getItem("user");
        if(user==null){
            history.push("/login");
        }
        else{
            history.push({ pathname: '/add-review',
            
            state:{
                name:props.name,
                id:props.data
            }

          })
        }
    }
   
    return (
        <div className="productDetailMenuContent">
        {/* No product review yet. Be the first to review this product.  */}
        <div className="productDetailMenuContent-content">
            <div className="productDetailMenuContent-content-rating">
                <div className="productDetailMenuContent-content-rating-average">
                    <span>Average Rating</span>
                    <div className="productDetailMenuContent-content-rating-average-star">
                    <Rating data={rating}/>
                    <p>Based on {review.length} ratings</p>
                    </div>
                </div>
                <div className="productDetailMenuContent-content-rating-count">
                    <div className="productDetailMenuContent-content-rating-count-five">
                        <div>
                        <Rating data={5}/>
                        </div>
                        <div>
                            ({count5})
                        </div>
                       
                    </div>
                    <div className="productDetailMenuContent-content-rating-count-five">
                        <div>
                        <Rating data={4}/>
                        </div>
                        <div>
                        ({count4})
                        </div>                        
                    </div>
                    <div className="productDetailMenuContent-content-rating-count-five">
                        <div><Rating data={3}/></div>
                        <div>({count3})</div>
                        
                    </div>
                    <div className="productDetailMenuContent-content-rating-count-five">
                       <div><Rating data={2}/></div>
                       <div>({count2})</div> 
                    </div>
                    <div className="productDetailMenuContent-content-rating-count-five">
                        <div><Rating data={1}/></div>
                        <div>({count1})</div>
                        
                    </div>
                </div>
            </div>
            <div className="productDetailMenuContent-content-add">
                <div className="productDetailMenuContent-content-add-title">
                <span>Have you used this product?</span>
                </div>
                <div className="productDetailMenuContent-content-add-sub">
                    <span>Share your product view,delivery,quality,service with Saptabazar.com </span>
                </div>
                <div className="productDetailMenuContent-content-add-ask">
                    <button onClick={addReview}>Add Review</button>
                </div>


            </div>
        
        </div>
        {
             review.map((item,index) => (
                 <UserReview
                 title={item.reviewTitle}
                 body={item.review}
                 rating={item.rating}
                 user={null}/>
             ))
         }
        
         
         
          </div>
    )
}
