"use strict";

const companies = require("./data/companies.json");
const items = require("./data/items.json");

const getItems = (req, res) => {
    res.status(200).json({ status: 200, data: items })
};

const getSingleItem = (req, res) => {
    const id = req.params.id;
    const item = items.find((item) => item.name === id)

    if(item) {
        res.status(200).json({ item }) 
    } res.status(404).json("Error: not Found")
}   

const getBrands = (req, res) => {
    res.status(200).json({ data: companies })
};

const getSingleBrand = (req, res) => {
    const id = req.params.id;
    const brand = companies.find((item) => item.name === id)

    if(brand) {
        res.status(200).json({ brand }) 
    } res.status(404).json("Error: not Found")
}     

module.exports = {
    getItems,
    getSingleItem,
    getBrands,
    getSingleBrand,

};
      