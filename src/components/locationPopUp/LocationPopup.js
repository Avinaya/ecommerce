import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./LocationPopup.scss";

const popularLocation = ["Kathmandu", "Bhaktapur", "Lalitpur"];

function LocationPopup() {
  const [city, setCity] = React.useState("Kathmandu");

  return (
    <Popup
      trigger={
        <div className="location-trigger">
          <i className="fa fa-map-marker mr-2 "></i>
          <span>{city}</span>
        </div>
      }
      modal
      nested
    >
      <div className="location">
        <div className="location-title">
          <span className="location-title-head">
            Order Form Neareast Merchant
          </span>
          <span className="location-title-sub">
            Online Delivery in Kathmandu Nepal
          </span>
        </div>
        <div className="location-input">
          <span className="location-input-field">
            <input type="text" />
            <i className="fa fa-map-marker" />
          </span>
          <span className="location-input-locate">Find</span>
        </div>

        <div className="location-cities">
          <span>Popular Cities</span>

          {popularLocation.map((val, index) => {
            return (
              <p
                key={index}
                className="location-cities-popular"
                onClick={() => setCity(val)}
              >
                {val}
              </p>
            );
          })}
        </div>

        <div></div>
      </div>
    </Popup>
  );
}

export default LocationPopup;
