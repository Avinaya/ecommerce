import React,{useState,useEffect} from "react";
import "./Deals.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReverseTimer from './Timer';
import axios from 'axios';
import SecondProductCard from './../productCard/secondProductCard/SecondProductCard';
import { BASE_URL } from "../../constants/constant";

function Deals(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function response() {
      const formData = new FormData();
      formData.append("subCategory", "clothing");
      formData.append("pageNo", 0);
      formData.append("pageSize", 6);
      const catResponse = await axios.post(
        `${BASE_URL}/productSearch/filter`,
        formData
      );
      setData(catResponse.data.content);
    }
    response();
  }, []);



  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="deals">
      <div className="deals-heading">
        <h5 className="d-inline deals-heading-title productCard-heading-title ">Deals Of The Days</h5>
        <i className="fa fa-clock-o mr-2 productCard-heading-title"></i>
        <ReverseTimer/>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {data.map((val,index)=>{
          return(
            <div key={index} className="deals-item"><SecondProductCard data={val} style={false}/></div>
          )
      })}
      </Carousel>
      
    </div>
  );
}

export default Deals;
