import React from "react";
import { useSelector } from "react-redux";
import ProductsPage from "./ProductsPage";
import AllProductsImage from "./banner-images/allproducts-background.jpg";

const AllProductPage = () => {
  const allTheProducts = useSelector((state) => state.items.items);
  const status = useSelector((state) => state.items.status);
  //console.log(allTheProducts)

  if (!allTheProducts || status === "loading") {
    return <div>Loading</div>;
  }

  return (
    <ProductsPage
      products={allTheProducts}
      bannerText={"All Products"}
      bannerImage={AllProductsImage}
    />
  );
};

export default AllProductPage;
