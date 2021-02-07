"use strict";

const companies = require("./data/companies.json");
const products = require("./data/items.json");

// Get all products:
const getProducts = (req, res) => {
    res.status(200).json({ status: 200, data: products })
};

// Get single product with id:
const getSingleProduct = (req, res) => {
    const productId = Number(req.params.id);
    //console.log(typeof productId + productId)
    const product = products.filter((item) => item._id === productId)
    //console.log(product)
    res.status(200).json({ status: 200, data: product })
}   

// Get all companies:
const getCompanies = (req, res) => {
    res.status(200).json({ data: companies })
};

// const getSingleCompany = (req, res) => {
//     const id = req.params.id;
//     //console.log(id)
//     const company = companies.find((item) => item.name === id)
//     if(company) {
//         res.status(200).json({ company }) 
//     };
// }     

// Get all categories:
const getCategories = (req, res) => {
    const categoryArray=products.map(elem=>{
        return elem.category;
    });
    const uniqueCategories = categoryArray.filter((item, i, ar) => ar.indexOf(item) === i);
    // console.log(unique);
    res.status(200).json({status:200, data:uniqueCategories})
}

// Find products with the same category name: 
const getProductsByCategory = (req,res) => {
    const category = req.params.category;
    //console.log(category)
    const productsBySelectedCategory = products.filter((item) => item.category === category)
    //console.log(productInCat)
    res.status(200).json({ status: 200, data:productsBySelectedCategory })
}

// Get company id from company name, find products with same company id: 
const getProductsByCompany = (req,res) => {
    const companyName = req.params.company;
    //console.log(companyName)
    const company = companies.find((item) => item.name === companyName)
    console.log(company._id)
    const productsByCompanyArray = products.filter((item) => item.companyId === company._id )
    
    res.status(200).json({ status: 200, data: productsByCompanyArray });
}

module.exports = {
    getProducts,
    getSingleProduct,
    getCompanies,
    // getSingleCompany,
    getCategories,
    getProductsByCategory,
    getProductsByCompany,
};


