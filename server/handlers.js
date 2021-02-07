"use strict";

const companies = require("./data/companies.json");
const products = require("./data/items.json");

const getProducts = (req, res) => {
    res.status(200).json({ status: 200, data: products })
};

const getSingleProduct = (req, res) => {
    const id = req.params.id;
    const product = products.find((item) => item._id === id)
    console.log(id)
    if(product) {
        res.status(200).json({ product }) 
    } res.status(404).json("Error: not Found")
}   

const getCompanies = (req, res) => {
    res.status(200).json({ data: companies })
};

const getSingleCompany = (req, res) => {
    const id = req.params.id;
    console.log(id)
    const company = companies.find((item) => item.name === id)

    if(company) {
        res.status(200).json({ company }) 
    };
}     

module.exports = {
    getProducts,
    getSingleProduct,
    getCompanies,
    getSingleCompany,

};
      