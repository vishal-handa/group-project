import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsPage from "./ProductsPage";
//import bannerImages from "./banner-images/banner-images.json";
import EntertainmentImage from "./banner-images/Entertainment-background.jpg";
import LifestyleImage from "./banner-images/Lifestyle-background.jpg";
import FitnessImage from "./banner-images/Fitness-background.jpg";
import MedicalImage from "./banner-images/Medical-background.jpg";
import PetsImage from "./banner-images/Pets-background.jpg";
import IndustrialImage from "./banner-images/Industrial-background.jpg";
import GamingImage from "./banner-images/Gaming-background.jpg";

const SelectedCategoryPage = () => {
  const { category } = useParams();
  // console.log(category);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`/categories/${decodeURIComponent(category)}`)
      .then((res) => res.json())
      .then((res) => setCategoryProducts(res.data));
  }, [category]);
  //   console.log(categoryProducts);

  // const bannerPic = bannerImages.find((image) => image.Category === category);
  // console.log(bannerPic);

  return (
    <ProductsPage
      products={categoryProducts}
      bannerText={category}
      // bannerImage={bannerPic.ImageSrc}
      bannerImage={
        category === "Entertainment"
          ? EntertainmentImage
          : category === "Fitness"
          ? FitnessImage
          : category === "Lifestyle"
          ? LifestyleImage
          : category === "Medical"
          ? MedicalImage
          : category === "Industrial"
          ? IndustrialImage
          : category === "Gaming"
          ? GamingImage
          : category === "Pets and Animals"
          ? PetsImage
          : null
      }
    />
  );
};

export default SelectedCategoryPage;
