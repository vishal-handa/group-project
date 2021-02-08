import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "./ProductGrid";

const SelectedCategoryPage = () => {
    const { category }=useParams();
    // console.log(category);
    const [categoryProducts, setCategoryProducts]=useState([]);

    useEffect(()=>{
        fetch(`/categories/${decodeURIComponent(category)}`)
            .then(res=>res.json())
            .then(res=> setCategoryProducts(res.data))
    },[category]);
    // console.log(categoryProducts);
    return (
        <>
            {categoryProducts && <ProductGrid products={categoryProducts}/>}
        </>
    )
}

export default SelectedCategoryPage;