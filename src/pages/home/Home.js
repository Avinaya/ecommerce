import React from "react";
import Highlight from "../../components/highlight/Highlight";
import Banner from "../../components/banner/Banner";
import Featured from "../../components/featured/Featured";
import Latest from "../../components/products/latest/Latest";
import Recommended from "../../components/products/recommended/Recommended";
import PopularCategories from "../../components/popularCategories/PopularCategories";
import Banner2 from "../../components/banner/banner2/Banner2";
import BestSelling from "../../components/products/bestSelling/BestSelling";
import Banner3 from "../../components/banner/banner3/Banner3";
import About from "../../components/about/About";
import Banner4 from "../../components/banner/banner4/Banner4";
import Deals from "../../components/deals/Deals";

function Home() {
  const banner2 = {
    image1:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1600751181/end-of-summer-sale726x270_zwxxqc.jpg",
    image2:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1600751177/office-supplies-726x270_ppl7oq.jpg",
  };
  return (
    <React.Fragment>
      <Highlight />
      <Banner />
      <Deals />
      <Banner2 banner={banner2} />
      <Recommended />
      <Featured />
      <Latest />
      <PopularCategories />
      <Banner2 />
      <BestSelling />
      <Banner4 />
      <Banner3 />
      <About />
    </React.Fragment>
  );
}
export default Home;
