// import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Footer from "../components/Footer";
import { HomePage } from "../styles/HomeStyles";


export default function Home(){
    return(
    <HomePage>
        {/* hero section */}
        {/* <HeroSection /> */}
        {/* Products: 3d prints, aprons, etc */}
        {/* About Us */}
        <About />
        <Footer />
    </HomePage>
    )
}