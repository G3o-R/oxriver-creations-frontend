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
  MotionNav,
  NavContainer,
  MenuWrapper,
} from "../styles/NavbarTwoStyles";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { ReactComponent as OxRiverCreactions } from "../images/ORC.svg";
import { ReactComponent as ORCLogo } from "../images/ORLogo.svg";

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
      if (lastScrollY > window.scrollY && window.scrollY < 400) {
        setEffect("--transparent");
      } else if (lastScrollY < window.scrollY && window.scrollY > 100) {
        setEffect("--hidden");
        setDropdownVisible(false);
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
        <LogoWrapper className="logo-wrapper">
          <LogoContainer className="logo-container">
            <ORCLogo className="logo" />
            <OxRiverCreactions className="OxRiver-creations" />
            <ORCLogo className="logo" />
          </LogoContainer>
        </LogoWrapper>
      </StyledSection>
      <NavContainer className="nav-container">
        <MotionNav
          className="nav"
          initial={{ height: 0 }}
          animate={{ height: isDropdownVisible && isMobile ? "auto" : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <NavLinks
            className={`nav-links ${isMobile ? "mobile" : ""} ${
              isMobile && isDropdownVisible ? "active" : ""
            }`}
          >
            <LinkWrapper>
              <NavLink
                to="/"
                onClick={isMobile ? () => setDropdownVisible(false) : null}
              >
                Home
              </NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink
                to="/products"
                onClick={isMobile ? () => setDropdownVisible(false) : null}
              >
                Products
              </NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink
                to="/services"
                onClick={isMobile ? () => setDropdownVisible(false) : null}
              >
                Services
              </NavLink>
            </LinkWrapper>
          </NavLinks>
        </MotionNav>
        <MenuWrapper>
          <MenuDrop onClick={toggleDropdown} className={isDropdownVisible ? "active" : "inactive"}/>
        </MenuWrapper>
      </NavContainer>
    </Header>
  );
}
