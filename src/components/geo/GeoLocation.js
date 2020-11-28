import React from "react";

function GeoLocation() {
  const [geo, setGeo] = React.useState({ latitude: "", longitude: "" });

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setGeo({...geo,latitude:position.coords.latitude,longitude:position.coords.longitude})
      });
    }
  }, []);
  return <div>
  
  <h1>Your Current latitude is {geo.latitude}</h1>
  <h1>Your Current longitude is {geo.longitude}</h1>

  </div>;
}

export default GeoLocation;
