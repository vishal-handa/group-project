import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import CompanyBanners from "./banner-images/banner-company-images.json";

const SelectedCompanyPage = () => {
  const { company } = useParams();
  // console.log(company);
  const [companyProducts, setCompanyProducts] = useState([]);

  const CompanyBanner =
    CompanyBanners[Math.floor(Math.random() * CompanyBanners.length)];

  useEffect(() => {
    fetch(`/companies/${decodeURIComponent(company)}`)
      .then((res) => res.json())
      .then((res) => setCompanyProducts(res.data));
  }, [company]);

  return (
    <ProductsPage
      products={companyProducts}
      bannerText={company}
      bannerImage={CompanyBanner.ImageSrc}
    />
  );
};

export default SelectedCompanyPage;
