import React from "react";
import "./PopularCategories.scss";
import FlipCard from "../card/flipCard/FlipCard";
import PopularMobileView from "./mobileView/PopularMobileView";

const popular_data = [
  {
    subHeading: "Computer And Accessories",
    categories1: "Laptop",
    categories2: "Desktop And Monitors",
    categories3: "Comuting Accessories",
    imageFront:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088155/categoriesPopular/categoryBanners_laptops_fs9pkm.jpg",
    imageBack:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088155/categoriesPopular/categoriesbannersecondarycomputer_v48sqs.jpg",
  },
  {
    subHeading: "Phone and Tablets",
    categories1: "Mobile Phones",
    categories2: "Tablets",
    categories3: "Mobile Phone Accessories",
    imageFront:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088154/categoriesPopular/categoryBanners_smartphones_grue2w.png",
    imageBack:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088153/categoriesPopular/categoriesbannersecondaryphones-and-tablets_ayhnu4.png",
  },
  {
    subHeading: "Electronic",
    categories1: "Telivisions",
    categories2: "DVD Players and Recoders",
    categories3: "Cameras",
    imageFront:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088153/categoriesPopular/categoryBanners_Electronics_aoekg9.jpg",
    imageBack:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088154/categoriesPopular/categoriesbannersecondaryelectronics_gegxtf.png",
  },
  {
    subHeading: "Aalmari Fashions",
    categories1: "Men`s Wear",
    categories2: "Women`s Wear",
    categories3: "Men`s Accessories",
    imageFront:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088154/categoriesPopular/categoryBanners_Fashion_bf8tri.png",
    imageBack:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088154/categoriesPopular/categoriesbannersecondaryfashion_aexkkg.jpg",
  },
  {
    subHeading: "Home And Kichen",
    categories1: "Large Appliance",
    categories2: "Small Appliances",
    categories3: "Home Furnishing",
    imageFront:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088154/categoriesPopular/categoryBanners_HK_krrzpj.jpg",
    imageBack:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088153/categoriesPopular/categoriesbannersecondaryhome-kitchen_dfrjmh.jpg",
  },
  {
    subHeading: "Bady, Kids And Toys",
    categories1: "Fashions For Girls",
    categories2: "Fashions For Boys",
    categories3: "Baby Essentials",
    imageFront:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088154/categoriesPopular/categoryBanners_BKT_iurb8i.jpg",
    imageBack:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088155/categoriesPopular/categoriesbannersecondarybaby-kids-toys_gfoqe7.jpg",
  },
  {
    subHeading: "Wines & Other Categories",
    categories1: "Beauty, Health & Personal Care",
    categories2: "Sports and Fitness",
    categories3: "Books & Media Library",
    imageFront:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088155/categoriesPopular/categoryBanners_winesSpirits_f4rx4j.jpg",
    imageBack:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088153/categoriesPopular/categoriesbannersecondaryother-categories_axdq0t.jpg",
  },
  {
    subHeading: "Beauty, Health & Personal Care",
    categories1: "Makeuop",
    categories2: "Fragrances",
    categories3: "Hair Centre",
    imageFront:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088153/categoriesPopular/categoryBanners_beauty_and_personal_care_porcji.png",
    imageBack:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088155/categoriesPopular/categoriesbannersecondarybeauty-hc_mi5mqm.jpg",
  },
  {
    subHeading: "Sports And Fitness",
    categories1: "Fitness",
    categories2: "Outdoor & Indoor Games",
    categories3: "Sports Wear",
    imageFront:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088156/categoriesPopular/categoryBanners_sportsFitness_v1pcag.jpg",
    imageBack:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088153/categoriesPopular/categoriesbannersecondarysports-and-fitness_sjqkwa.jpg",
  },
  {
    subHeading: "AutoMotive",
    categories1: "Automotive Tools",
    categories2: "Saftey and Security",
    categories3: "Autocare & Maintenance",
    imageFront:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088154/categoriesPopular/categoryBanners_gen_pdmqz7.jpg",
    imageBack:
      "https://res.cloudinary.com/ds5zgwshl/image/upload/v1595088153/categoriesPopular/categoriesbannersecondarypower-solutions_qwdd3e.jpg",
  },
];

const PopularCategories = () => {
  return (
    <div className="popular">
      <h5>Popular Categories</h5>
      <div className="popular-tools">
        {popular_data.map((val, index) => {
          return (
            <div key={index} className="popular-tools-item">
              <FlipCard data={val} />
              <PopularMobileView data={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PopularCategories;
