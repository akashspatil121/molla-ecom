import React from "react";

import "./Product.css"


import Header from "../Home/Header";

import ProductPreview from "./ProductPreview"

import ProductDescription from "./ProductDescription"

import MayYouAlsoLike from "./MayYouAlsoLike";

import Footer from "../Home/Footer"

function Product() {
    return (

        <>
            <header className="product_header">
                <Header/>
            </header>

            <section className="product_container">

                <ProductPreview/>
                <ProductDescription/>
                <MayYouAlsoLike/>

            </section>

            <footer className="product_footer">
                <Footer/>
            </footer>

        </>

    )
}

export default Product;