import {
  Header,
  NavLinks,
  LinkWrapper,
  NavLink,
  MenuDrop,
  StyledSection,
  LogoWrapper,
  LogoContainer,
  Logo,
} from "../styles/NavbarTwoStyles";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function NavbarTwo() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [effect, setEffect] = useState("--visible");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isDropdownVisible &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

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
        setDropdownVisible(false)
      }
      lastScrollY = window.scrollY;
    });

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownVisible]);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <Header ref={navRef} className={effect}>
      <StyledSection className="left-side">
        <LogoWrapper>
          <LogoContainer>
            <Logo
              src="/OxRiverLogo.3.png"
              alt="OxRiver Logo"
              onClick={() => navigate("/")}
            />
          </LogoContainer>
        </LogoWrapper>
        <MenuDrop onClick={toggleDropdown} />
      </StyledSection>
      <motion.nav
        className="nav"
        initial={{ height: 0 }}
        animate={{ height: isDropdownVisible ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          overflow: "hidden",
          position: "absolute",
          top: "120px",
          left: 0,
          right: 0,
        }}
      >
        <NavLinks
          className={`nav-links ${isMobile ? "mobile" : ""} ${
            isMobile && isDropdownVisible ? "active" : ""
          }`}
          >
          <LinkWrapper>
            <NavLink to="/">Home</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink to="/products">Products</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink to="/services">Services</NavLink>
          </LinkWrapper>
        </NavLinks>
      </motion.nav>
    </Header>
  );
}
