import { 
    LogoWrapper,
    Logo,
    NavbarContainer,
    NavLinks,
    NavLink,
    LogoContainer
} from "../styles/NavbarStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [effect, setEffect] = useState("--visible");
    const navigate = useNavigate();

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY > window.scrollY || window.scrollY < 100) {
        setEffect("--visible");
      }
        if(lastScrollY > window.scrollY && window.scrollY < 400){
            setEffect("--transparent")
        }
      else if (lastScrollY < window.scrollY && window.scrollY > 100) {
        setEffect("--hidden");
      }
      lastScrollY = window.scrollY;
    });

    return (
        <NavbarContainer className={effect}>
            <LogoWrapper>
                <LogoContainer>
                    <Logo src="/OxRiverLogo.3.png" alt="OxRiver Logo" onClick={()=>navigate("/")}/>
                </LogoContainer>
            </LogoWrapper>
            <NavLinks className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/services">Services</NavLink>
            </NavLinks>
        </NavbarContainer>
    );
}
