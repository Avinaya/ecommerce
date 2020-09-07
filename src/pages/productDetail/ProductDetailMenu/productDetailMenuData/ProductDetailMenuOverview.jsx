import React from 'react'

export default function ProductDetailMenuOverview(props) {
    const specificationList = props.data && props.data.productSpecificationList;

    return (
      <div className="productDetailMenuContent">
      <ul>
      {specificationList && specificationList.map((val, index) => {
        return (
          <li key={index} className="productDetailMenuContent-list-item">
            {val.productSpecificationType}
          </li>
        );
      })}
    </ul>
      </div>
      
    );
}
