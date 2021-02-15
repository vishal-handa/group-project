import React, { useState } from "react";
import Banner from "./Banner";
import Pagination from "./Pagination";
import ProductGrid from "./ProductGrid";

const ProductsPage = ({ products, bannerText }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState();
  //console.log(products);

  // Turn the price into a number so that the array can be sorted by ascending and descending order
  const formattedProducts = products.map((item) => {
    return {
      ...item,
      price: parseFloat(item.price.replace("$", "").replace(",", "")),
    };
  });
  //console.log(formattedProducts);

  const order = { asc: "asc", des: "des" };
  const sortProducts = (arrOfObjects, key, sortOrder = order.asc) => {
    const arrCopy = [...arrOfObjects];
    if (isAscending(sortOrder)) {
      arrCopy.sort((a, b) => a[key] - b[key]);
    } else {
      arrCopy.sort((a, b) => b[key] - a[key]);
    }
    return arrCopy;
  };

  const isAscending = (sortOrder) => sortOrder === order.asc;

  const ascendPrice = sortProducts(formattedProducts, "price", order.asc);
  const descendPrice = sortProducts(formattedProducts, "price", order.des);
  //console.log({ascendPrice, descendPrice})

  //Set array that will be mapped over based on state of sortBy
  const showPageProducts =
    sortBy === "low"
      ? ascendPrice
      : sortBy === "high"
      ? descendPrice
      : products;

  const productsPerPage = 16;
  const indexOfLastProduct = currentPage * productsPerPage; // 16
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 0
  // Get products from from first to last index
  const currentProducts = showPageProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //OnClick for page change, and scroll near of product grid
  const handlePageClicked = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 225,
      behavior: "smooth",
    });
  };

  return (
    <>
      {products ? (
        <>
          <Banner text={bannerText} />
          <ProductGrid
            showGridProducts={currentProducts}
            setSortBy={setSortBy}
          />
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            handlePageClicked={handlePageClicked}
          />
        </>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default ProductsPage;
