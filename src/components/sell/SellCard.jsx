import React from 'react';
import './SellCard.scss';

function SellCard(props) {
    
    
    return (
        <div>
            <div className="sellcard">
            <div className="sellcard-mainimage">
            <img src={props.image1} alt="color"></img>
            </div>
            <div className="sellcard-titleimage">
            <img src={props.image2}>
            </img>
            </div>
            <div className="sellcard-title">
            <h2>{props.title}</h2>
            </div>
            <div className="sellcard-description">
            <span>{props.description}</span>
            </div>
            {
                props.array.map((val,index)=>{
                    return(<div className="sellcard-item" key={index}>
                    <div className="sellcard-item-icon">
                    <i className="fa fa-check-circle" ></i>
                    </div>
                    <div className="sellcard-item-text">{val}</div></div>);
                })
            }
            
            <div className="sellcard-button">
            <button>
            <span>{props.button}</span>
            </button>
            </div>

            </div>
        </div>
    )
}

export default SellCard
