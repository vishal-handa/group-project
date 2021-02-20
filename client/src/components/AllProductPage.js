import React from "react";
import { useSelector } from "react-redux";
import ProductsPage from "./ProductsPage";
import AllProductsImage from "./banner-images/allproducts-background.jpg";
import { FaSpinner } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { Status } from "./helpers/constants";

const AllProductPage = () => {
  const products = useSelector((state) => state.items.items);
  const status = useSelector((state) => state.items.status);
  console.log(products);
  if (status === Status.LOADING || !products) {
    return <FaSpinner />;
  }
  return (
    <ProductsPage
      products={products}
      bannerText={"All Products"}
      bannerImage={AllProductsImage}
    />
  );
};

export default AllProductPage;
