import About from "../components/About";
import Footer from "../components/Footer";
import { HomePage, ContentContainer } from "../styles/pageStyles/HomeStyles";
import SliderSection from "../components/SliderSection";
import HeroSection from "../components/HeroSection";

export default function Home({ categoriesArray, bestSellersArray }) {
  const settingsBestSeller = {
    numSwipers: 2,
    type: "BestSellers",
  };

  const doubledCategoryArray = categoriesArray.concat(categoriesArray);

  return (
    <HomePage>
      <HeroSection />
      <ContentContainer>
        <SliderSection
          productsArray={bestSellersArray}
          title="Best Sellers"
          settings={settingsBestSeller}
        />
        <SliderSection productsArray={doubledCategoryArray} title="Products" />
        <About />
      </ContentContainer>
      <Footer />
    </HomePage>
  );
}
