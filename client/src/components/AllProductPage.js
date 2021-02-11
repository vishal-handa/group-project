import React, { useState } from "react";
//import ItemSmallPageTest from "./ItemSmallPageTest";
import Pagination from "./Pagination";
import ProductGrid from "./ProductGrid";
import { useSelector } from 'react-redux';
import Banner from "./Banner";

const AllProductPage = ({handleTarget}) => {

    const allTheProducts = useSelector(state=>state.items.items);
    const status = useSelector(state => state.items.status);
    //console.log(allTheProducts)
    const [ currentPage, setCurrentPage ] = useState(1);
    const  productsPerPage = 16;
    
    if(!allTheProducts || status === "loading") {
        return <div>Loading</div>
    }
    
    const indexOfLastProduct = currentPage * productsPerPage; // 16
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 0 
    // Get products from from first to last index
    const currentProducts = allTheProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    
    //OnClick for page change
    const handlePageClicked = (page) => {
        setCurrentPage(page)
    };

    return (
        <div>
            <Banner text={"All Products"} />
            <ProductGrid products={currentProducts} 
                        handleTarget={handleTarget}
            />
            <Pagination 
                productsPerPage={productsPerPage} 
                totalProducts={allTheProducts.length} 
                handlePageClicked={handlePageClicked}/>
        </div>
    )
}

export default AllProductPage;