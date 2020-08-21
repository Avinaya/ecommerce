import React from 'react'

export default function ProductDetailMenuShipping() {
    return (
        <div className="productDetailMenuContent">
        <div className="shipping">
          <div className="shipping-delivery">
            <img src="https://img.icons8.com/cotton/64/000000/truck.png" alt="" />
            <div className="d-inline ml-4">
              <span>
                <strong>Delivery</strong>
              </span>
              <p>Estimated delivery time: 1 - 9 days</p>
            </div>
          </div>
          <div className="shipping-express">
            <img src="https://img.icons8.com/nolan/64/truck.png" alt="" />
            <div className="d-inline ml-4">
              <span>
                <strong>Express Delivery Available</strong>
              </span>
              <p>
                Same day delivery: <strong>Order before 11AM</strong> and get it
                today.
              </p>
              <p>
                Next day delivery: <strong>Order after 11AM</strong> and get it
                tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
