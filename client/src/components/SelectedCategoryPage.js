import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import bannerImages from "./banner-images/banner-images.json";

const SelectedCategoryPage = () => {
  const { category } = useParams();
  // console.log(category);
  const [categoryProducts, setCategoryProducts] = useState([]);
  //fetching products based on category and putting them in local state.
  useEffect(() => {
    fetch(`/categories/${decodeURIComponent(category)}`)
      .then((res) => res.json())
      .then((res) => setCategoryProducts(res.data));
  }, [category]);
  //   console.log(categoryProducts);

  const bannerPic = bannerImages.find((image) => image.Category === category);
  //console.log(bannerPic);
  //pass them to product grid to be rendered.
  return (
    <ProductsPage
      products={categoryProducts}
      bannerText={category}
      bannerImage={bannerPic.ImageSrc}
    />
  );
};

export default SelectedCategoryPage;
