import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const baseUrl = `https://saptasoch.herokuapp.com`;
  useEffect(() => {
    async function fetchData() {
      const categoryData = await axios
        .get(`${baseUrl}/category`)
        .catch(function (error) {
          console.log(error);
        });
      const highlightData = await axios
        .get(`${baseUrl}/mainSlider`)
        .catch(function (error) {
          console.log(error);
        });
      const secondaryHighlightData = await axios
        .get(`${baseUrl}/topBanner`)
        .catch(function (error) {
          console.log(error);
        });
      const recommendedData = await axios
        .get(`${baseUrl}/product/tag/recommended?pageNo=0&pageSize=8`)
        .catch(function (error) {
          console.log(error);
        });
      const latestData = await axios
        .get(`${baseUrl}/product/tag/latest?pageNo=0&pageSize=8`)
        .catch(function (error) {
          console.log(error);
        });
      const bestSellingData = await axios
        .get(`${baseUrl}/product/tag/bestSelling?pageNo=0&pageSize=8`)
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
