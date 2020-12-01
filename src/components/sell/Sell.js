import React from "react";
import "./Sell.scss";
import { Link } from "react-router-dom";

export default function Sell(){

    return(
        <div className="sell">
            <div className="sell-head">
                <h1>Sell On Sapta Bazar</h1>
            </div>

            <div className="sell-grow">
                <div className="sell-grow-image">
                    <img  src="http://res.cloudinary.com/ds5zgwshl/image/upload/v1606236005/dfllvofkxjepxmmr7ec0.webp"
                        
                        alt="grow your business online">
                    </img>

                </div>
                <div className="sell-grow-content">
                    <div className="sell-grow-content-business">
                    <span>Grow your business online.</span>
                    </div>
                    <div className="sell-grow-content-reach">
                    <span>Reach millions of buyers in every state in Nepal easily, get your store on SaptaBazar today!</span>
                    </div>
                    <div className="sell-grow-content-button">
                    <Link to="/sell-options" className="link">
                    <button>Register Now</button>
                    </Link>
                        

                    </div>
                    

                </div>


            </div>
            <div className="sell-why">
               <div className="sell-why-title">
                   <h2>
                       Why Sell On SaptaBazar?
                   </h2>
                   </div>

                   <div className="sell-why-grid">
                       <div className="sell-why-grid-one">
                       <img  src="http://res.cloudinary.com/ds5zgwshl/image/upload/v1606236330/ezczvoxf8pbrjqd7olpd.webp"
                        
                        alt="grow your business online">
                    </img>
                    <h3>Earn More Money</h3>
                    <span>SaptaBazar is one of the largest websites in Nepal. Sell to over 50 million buyers across every state in Nepal</span>

                       </div>
                       <div className="sell-why-grid-one">
                       <img  src="http://res.cloudinary.com/ds5zgwshl/image/upload/v1606236375/ymgkxjt8w242xujrolgp.webp"
                        
                        alt="grow your business online">
                    </img>
                    <h3>Communication is Easy</h3>
                    <span>We make it easy to exchange messages with buyers who may have questions.</span>

                       </div>
                       <div className="sell-why-grid-one">
                       <img  src="http://res.cloudinary.com/ds5zgwshl/image/upload/v1606236410/jwfewhzomhkxijqccqvi.webp"
                        
                        alt="grow your business online">
                    </img>
                    <h3>Low Commissions</h3>
                    <span>Commission fees are as low as 3%, and you only pay when you successfully sell your product.</span>

                       </div>
                       <div className="sell-why-grid-one">
                       <img  src="http://res.cloudinary.com/ds5zgwshl/image/upload/v1606236440/g2gqjotgnssixhtuqnke.webp"
                        
                        alt="grow your business online">
                    </img>
                    <h3>You Have Our Support 24/7</h3>
                    <span>Konga provides various tools to increase your success including: our online SellerHQ and our dedicated merchant support teams.</span>

                       </div>
                       <div className="sell-why-grid-one">
                       <img  src="http://res.cloudinary.com/ds5zgwshl/image/upload/v1606236470/egqud922sxfdxch1upc3.webp"
                        
                        alt="grow your business online">
                    </img>
                    <h3>You’re in Control</h3>
                    <span>You choose the price for your return policy, your delivery method on paid orders, and other important options.</span>

                       </div>
                       <div className="sell-why-grid-one">
                       <img  src="http://res.cloudinary.com/ds5zgwshl/image/upload/v1606236499/gllksmpb16qswznqplv1.webp"
                        
                        alt="grow your business online">
                    </img>
                    <h3>We Make Sure It’s Safe</h3>
                    <span>SaptaBazar is the safest and most trusted platform to buy and sell online in Nepal. We’ve built a community that takes safety & security seriously for both buyers and sellers.</span>

                       </div>
                       </div> 

            </div>

            <div className="sell-earn">
                <div className="sell-earn-main">
                    <div className="sell-earn-main-money">
                        <span>Earn Money, Hassle Free</span>

                    </div>
                    <div className="sell-grow-content-button">
                    <Link to="/sell-options" className="link">
                    <button>Register Now</button>
                    </Link>
                        
                    </div>
                    
                </div>
                <div className="sell-earn-i">
                    
                <img  src="http://res.cloudinary.com/ds5zgwshl/image/upload/v1606236701/d0nhthztvvmkpkvkwcni.webp"
                        
                        alt="grow your business online">
                    </img>

                </div>

            </div>



        </div>
    );
}