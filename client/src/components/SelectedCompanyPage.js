import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import Banner from "./Banner";

const SelectedCompanyPage = () => {
    const {company}=useParams();
    // console.log(company);
    const [companyProducts, setCompanyProducts]=useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ sortBy, setSortBy ] = useState();

    useEffect(()=>{
        fetch(`/companies/${decodeURIComponent(company)}`)
            .then(res=>res.json())
            .then(res=>setCompanyProducts(res.data))
    },[company]);
    
    const productsArray = companyProducts.map((item) => {
        return {... item, price: parseFloat(item.price.replace("$", ""))}
    })
    //console.log(productsArray)

    const sortCopy = (arrOfObjects, key, order = 'asc') => {
        const arrCopy = [...arrOfObjects];
        if(order === 'asc'){
           arrCopy.sort((a, b) => a[key] - b[key])
       } else{
           arrCopy.sort((a, b) => b[key] - a[key])
        }
        return arrCopy
   };

    const ascendPrice = sortCopy(productsArray, 'price', 'asc');
    const descendPrice = sortCopy(productsArray, 'price', 'desc');
    //console.log({ascendPrice, descendPrice})
    let showProducts;
    if(sortBy === "low") {
        showProducts = ascendPrice;
    } else if (sortBy === "high") {
        showProducts = descendPrice
    } else {
        showProducts = companyProducts;
    }
    
    const  productsPerPage = 16;
    const indexOfLastProduct = currentPage * productsPerPage; // 16
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 0 
    // Get products from from first to last index
    const currentProducts = showProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    //OnClick for page change
    const handlePageClicked = (page) => {
    setCurrentPage(page)
};
    return (
        <>
            {companyProducts ? 
            <>
                <Banner text={`${company}`} />
                <ProductGrid showProducts={currentProducts} setSortBy={setSortBy} />
                <Pagination 
                    productsPerPage={productsPerPage} 
                    totalProducts={companyProducts.length} 
                    handlePageClicked={handlePageClicked}/>
            </> : "Loading"}
        </>
    )
}

export default SelectedCompanyPage;