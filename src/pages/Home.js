// import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Footer from "../components/Footer";
import { HomePage } from "../styles/HomeStyles";


export default function Home(){
    return(
    <HomePage>
        <div className="hero-section-placeholder" style={{
            backgroundColor: "white",
            width: "100%",
            height: "70vh"
        }}></div>
        {/* Products: 3d prints, aprons, etc */}
        <About />
        <Footer />
    </HomePage>
    )
}