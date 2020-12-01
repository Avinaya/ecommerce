import React from "react";
import SellCard from "./SellCard";
import "./SellOptions.scss";
const data=[{
    image1:"http://res.cloudinary.com/ds5zgwshl/image/upload/v1606726775/uvyituhlifqkodirdovg.png",
    image2:"http://res.cloudinary.com/ds5zgwshl/image/upload/v1606809195/y1u6yv4knlhv5zojb33u.png",
    title:"SaptaBazarMall Seller",
    description:"SaptaBazarMall offers to consumers quality shopping experience with 100% authentic products. We offer trusted brands with superior delivery and return experience.",
    button:"SignUp as SaptaBazarMall Seller",
    array:["You are a brand owner or authorized distributor","Exclusive access to dedicated DarazMall campaigns","Benefit from higher overall seacrh ranking","Access to thousands of customers",
"Pay Marketplace fee only when you sell"]
},
{
    image1:"http://res.cloudinary.com/ds5zgwshl/image/upload/v1606809258/bxzqrep9jzn26rrtvbni.png",
    image2:"http://res.cloudinary.com/ds5zgwshl/image/upload/v1606809324/ufzpz7jpqecqvpxlyyah.png",
    title:"Local Seller",
    description:"SaptaBazar offers to consumers the largest variety of assortment from reliable local sellers who create a delightful shopping experience.",
    button:"Sign up as a Local Seller",
    array:["You are based locally","Access to multiple seller tools for your store","Pay Marketplace fee only when you sell"]
},
{
    image1:"http://res.cloudinary.com/ds5zgwshl/image/upload/v1606809295/aelnig4tvzidsfhpqbgn.png",
    image2:"http://res.cloudinary.com/ds5zgwshl/image/upload/v1606809358/j55fda4tndnh8bkaj5vx.png",
    title:"Global Seller",
    description:"SaptaBazar Global offers to consumers access to widest assortment from overseas sellers",
    button:"Sign up as a Global Seller",
    array:["You are based out of Nepal","12You are a registered business","Get access to thousands of customers","Access to multiple seller tools for your store",
"Pay Marketplace fee only when you sell"]
},
{  
    image1:"http://res.cloudinary.com/ds5zgwshl/image/upload/v1606809258/bxzqrep9jzn26rrtvbni.png",
    image2:"http://res.cloudinary.com/ds5zgwshl/image/upload/v1606809387/thm4znk2meeyeyncqdrm.png",
    title:"Digital Goods Seller",
    description:"SaptaBazar offers to consumers the widest sort of digital goods & services from local sellers. It is a platform for digital convenience: where consumers enjoy exclusive offers, pay digitally, get instant digital delivery.",
    button:"Sign up as Digital Good Seller",
    array:["You are based locally","Access to multiple seller tools for your store","Pay Marketplace fee only when you sell"]
}



]
export default function SellOptions(){
    return(
        <div className="selloptions">
            <div className="selloptions-title">
                <h1>Selling Made Simple</h1>

            </div>
            <div className="selloptions-sub">
            <span>Become a seller today</span>
            </div>

            <div className="selloptions-main">
            {data.map((val,index)=>{
                return( <div className="selloptions-main-one" key={index}>
            
                <SellCard image1={val.image1}
                image2={val.image2}
                title={val.title}
                description={val.description}
                button={val.button}
                array={val.array} />
                </div>);
               
            })}
            
         
           
            </div>
           
        </div>
    );
}
