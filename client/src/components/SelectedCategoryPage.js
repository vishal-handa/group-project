import React from "react";
import CategoryProduct from "./CategoryProduct";

const SelectedCategoryPage = () => {

    return (
        <div>
            Page once category has been selected from dropdown.
            Fetch and map over items from within this category and display.
            <CategoryProduct />
        </div>
    )
}

export default SelectedCategoryPage;