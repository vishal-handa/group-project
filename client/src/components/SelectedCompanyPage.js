import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

const SelectedCompanyPage = () => {
    const {company}=useParams();
    // console.log(company);
    const [companyProducts, setCompanyProducts]=useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);

    useEffect(()=>{
        fetch(`/companies/${decodeURIComponent(company)}`)
            .then(res=>res.json())
            .then(res=>setCompanyProducts(res.data))
    },[company]);

    const  productsPerPage = 16;
    const indexOfLastProduct = currentPage * productsPerPage; // 16
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 0 
    // Get products from from first to last index
    const currentProducts = companyProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    //OnClick for page change
    const handlePageClicked = (page) => {
    setCurrentPage(page)
};
    return (
        <>
            {companyProducts ? 
            <>
                <ProductGrid products={currentProducts}/>
                <Pagination 
                    productsPerPage={productsPerPage} 
                    totalProducts={companyProducts.length} 
                    handlePageClicked={handlePageClicked}/>
            </> : "Loading"}
        </>
    )
}

export default SelectedCompanyPage;