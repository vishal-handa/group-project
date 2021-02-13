import React, { useState } from "react";
//import ItemSmallPageTest from "./ItemSmallPageTest";
import Pagination from "./Pagination";
import ProductGrid from "./ProductGrid";
import { useSelector } from 'react-redux';
import Banner from "./Banner";

const AllProductPage = () => {

    const allTheProducts = useSelector(state=>state.items.items);
    const status = useSelector(state => state.items.status);
    //console.log(allTheProducts)
    const [ sortBy, setSortBy ] = useState()
    const [ currentPage, setCurrentPage ] = useState(1);
    const  productsPerPage = 16;
    
    if(!allTheProducts || status === "loading") {
        return <div>Loading</div>
    }
    
    
    const productsArray = allTheProducts.map((item) => {
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
        showProducts = allTheProducts;
    }
        
    const indexOfLastProduct = currentPage * productsPerPage; // 16
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 0 
    // Get products from from first to last index
    const currentProducts = showProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    
    //OnClick for page change
    const handlePageClicked = (page) => {
        setCurrentPage(page)
    };

    return (
        <div>
            <Banner text={"All Products"} />
            <ProductGrid showProducts={currentProducts} setSortBy={setSortBy} />
            <Pagination 
                productsPerPage={productsPerPage} 
                totalProducts={allTheProducts.length} 
                handlePageClicked={handlePageClicked}/>
        </div>
    )
}

export default AllProductPage;