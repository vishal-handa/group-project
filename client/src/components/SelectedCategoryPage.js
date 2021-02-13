import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsPage from "./ProductsPage";

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

  return <ProductsPage products={categoryProducts} bannerText={category} />;
};

export default SelectedCategoryPage;
