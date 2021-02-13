import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsPage from "./ProductsPage";

const SelectedCompanyPage = () => {
  const { company } = useParams();
  // console.log(company);
  const [companyProducts, setCompanyProducts] = useState([]);

  useEffect(() => {
    fetch(`/companies/${decodeURIComponent(company)}`)
      .then((res) => res.json())
      .then((res) => setCompanyProducts(res.data));
  }, [company]);

  return <ProductsPage products={companyProducts} bannerText={company} />;
};

export default SelectedCompanyPage;
