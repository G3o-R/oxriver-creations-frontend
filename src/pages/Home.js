// import HeroSection from "../components/HeroSection";
import { useEffect, useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import { HomePage } from "../styles/HomeStyles";
import ProductsSection from "../components/ProductsSection";


export default function Home({categoriesArray, bestSellersArray}){

    const settingsBestSeller = {
        numSwipers: 2,
        type: "BestSellers"
    }

    return(
    <HomePage>
        <div className="hero-section-placeholder" style={{
            backgroundColor: "white",
            width: "100%",
            height: "70vh"
        }}></div>
        {/* Products: 3d prints, aprons, etc */}
        <ProductsSection productsArray={bestSellersArray} title="Best Sellers" settings={settingsBestSeller}/>
        <ProductsSection productsArray={categoriesArray} title="Products"/>
        <About />
        <Footer />
    </HomePage>
    )
}