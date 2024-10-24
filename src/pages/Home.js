// import HeroSection from "../components/HeroSection";
import { useEffect, useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import { HomePage } from "../styles/HomeStyles";
import SliderSection from "../components/SliderSection";
import HeroSection from "../components/HeroSection";


export default function Home({categoriesArray, bestSellersArray}){

    const settingsBestSeller = {
        numSwipers: 2,
        type: "BestSellers"
    }

    return(
    <HomePage>
        <HeroSection />

        {/* bestSeller cards are not the same height under 650px*/}
        <SliderSection productsArray={bestSellersArray} title="Best Sellers" settings={settingsBestSeller}/>
        <SliderSection productsArray={categoriesArray} title="Products"/>
        <About />
        <Footer />
    </HomePage>
    )
}