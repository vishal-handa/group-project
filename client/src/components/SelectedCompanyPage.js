import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "./ProductGrid";

const SelectedCompanyPage = () => {
    const {company}=useParams();
    // console.log(company);
    const [companyProducts, setCompanyProducts]=useState([]);

    useEffect(()=>{
        fetch(`/companies/${decodeURIComponent(company)}`)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                setCompanyProducts(res.data);
            })
    },[company]);
    return (
        <>
            {companyProducts && <ProductGrid products={companyProducts}/>}
        </>
    )
}

export default SelectedCompanyPage;