import React from "react";
import "./Store.scss";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../.././constants/constant";

function Store() {
  const history = useHistory();

  const [data, setData] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(`${BASE_URL}/vendorService/featured`)
        .catch(function (error) {
          console.log(error);
        });
      setData(response?.data);
    }

    fetchData();
  },[]);

  const handleClick = (param) => (e) => {
    e.preventDefault();
    history.push(`/store/${param}`);
  };

  return (
    <div className="store">
      <div className="store-heading">
        <h5 className="d-inline store-heading-title ">Featured Stores</h5>
        <Link to="/" className="store-heading-btn">
          Browse All Stores
        </Link>
      </div>
      <div className="store-tools">
        {data ? (
          data.map((val, index) => {
            return (
              <div
                key={index}
                className="store-tools-item"
                onClick={handleClick(val.vendorId)}
              >
                <img src={val.image} alt={val.vendorName} />
                <span>{val.vendorName} </span>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Store;
