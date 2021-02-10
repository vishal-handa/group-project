import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import Banner from "./Banner";

const SelectedCategoryPage = () => {
    const { category }=useParams();
    // console.log(category);
    const [categoryProducts, setCategoryProducts]=useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [theEvent, setTheEvent] = useState(0);

    useEffect(()=>{
        fetch(`/categories/${decodeURIComponent(category)}`)
            .then(res=>res.json())
            .then(res=> setCategoryProducts(res.data))
    },[category, theEvent]);
    // console.log(categoryProducts);

    const handleTarget=(ev)=>{
        const clickId=ev.target.id;
        if(clickId==="cartButton"){
            setTheEvent(theEvent+1);
        }
    }

    const  productsPerPage = 16;
    const indexOfLastProduct = currentPage * productsPerPage; // 16
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 0 
    // Get products from from first to last index
    const currentProducts = categoryProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    
    //OnClick for page change
    const handlePageClicked = (page) => {
        setCurrentPage(page)
    };
    return (
        <>
            {categoryProducts ? 
            <>
                <Banner text={`${category}`} />
                <ProductGrid products={currentProducts}
                            handleTarget={handleTarget}
                />
                <Pagination 
                    productsPerPage={productsPerPage} 
                    totalProducts={categoryProducts.length} 
                    handlePageClicked={handlePageClicked}
                />
            </> : "Loading"}
        </>
    )
}

export default SelectedCategoryPage;