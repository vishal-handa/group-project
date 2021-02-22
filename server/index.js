"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  getProducts,
  getSingleProduct,
  getCompanies,
  // getSingleCompany,
  getCategories,
  getProductsByCategory,
  getProductsByCompany,
  updateProductStock,
} = require("./handlers");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints:
  // Get endpoints to retrieve data from companies json and items json
  // Post endpoint to update stock after purchase

  .get("/products", getProducts)
  .get("/products/:id", getSingleProduct)
  .get("/companies", getCompanies)
  // .get('/companies/:id', getSingleCompany)
  .get("/categories", getCategories)
  .get("/categories/:category", getProductsByCategory)
  .get("/companies/:company", getProductsByCompany)
  .post("/updateProduct/:id", updateProductStock)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
