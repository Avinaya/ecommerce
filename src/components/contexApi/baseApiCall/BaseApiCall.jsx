import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/constant";

const BaseDataContex = React.createContext();

const BaseApiDataProvider = (props) => {
  const [data, setData] = useState({
    category: null,
    highlight: null,
    secondaryHighlight: null,
    recommended: null,
    latest: null,
    bestSelling: null,
  });

  useEffect(() => {
    async function fetchData() {
      const categoryData = await axios
        .get(`${BASE_URL}/category`)
        .catch(function (error) {
          console.log(error);
        });
      const highlightData = await axios
        .get(`${BASE_URL}/mainSlider`)
        .catch(function (error) {
          console.log(error);
        });
      const secondaryHighlightData = await axios
        .get(`${BASE_URL}/topBanner`)
        .catch(function (error) {
          console.log(error);
        });
      const recommendedData = await axios
        .get(`${BASE_URL}/product/tag/recommended?pageNo=0&pageSize=8`)
        .catch(function (error) {
          console.log(error);
        });
      const latestData = await axios
        .get(`${BASE_URL}/product/tag/latest?pageNo=0&pageSize=8`)
        .catch(function (error) {
          console.log(error);
        });
      const bestSellingData = await axios
        .get(`${BASE_URL}/product/tag/bestSelling?pageNo=0&pageSize=8`)
        .catch(function (error) {
          console.log(error);
        });
      setData({
        ...data,
        category: categoryData,
        highlight: highlightData,
        secondaryHighlight: secondaryHighlightData,
        recommended: recommendedData,
        latest: latestData,
        bestSelling: bestSellingData,
      });
    }
    fetchData();
  }, [setData]);

  return (
    <BaseDataContex.Provider value={data}>
      {props.children}
    </BaseDataContex.Provider>
  );
};

const BaseDataConsumer = BaseDataContex.Consumer;

export { BaseApiDataProvider, BaseDataConsumer };
export default BaseDataContex;
