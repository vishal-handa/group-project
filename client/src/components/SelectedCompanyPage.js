import React from "react";
import CompanyProduct from "./CompanyProduct";

const SelectedCompanyPage = () => {

    return (
        <div>
            Page once company has been selected from dropdown.
            Fetch and map over items from this company and display.
            <CompanyProduct />
        </div>
    )
}

export default SelectedCompanyPage;