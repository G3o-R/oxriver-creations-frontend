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
  StyledNav,
} from "../styles/NavbarTwoStyles";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function NavbarTwo() {
  const [effect, setEffect] = useState("--visible");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const navigate = useNavigate();
  const navRef = useRef(null);

  // Close dropdown if clicked outside
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

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownVisible]);

  // Handle scroll effect
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (lastScrollY > window.scrollY || window.scrollY < 100) {
        setEffect("--visible");
      }
      if (lastScrollY > window.scrollY && window.scrollY < 400) {
        setEffect("--transparent");
      } else if (lastScrollY < window.scrollY && window.scrollY > 100) {
        setEffect("--hidden");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <Header className={`header ${effect}`} ref={navRef}>
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
      <StyledNav>
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
      </StyledNav>
    </Header>
  );
}
