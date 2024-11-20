import {
  LogoWrapper,
  Logo,
  NavbarContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  MenuDrop,
  NavLinkWrapper,
  DropdownMenu,
  MobileNavLinks,
} from "../styles/NavbarStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [effect, setEffect] = useState("--visible");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (lastScrollY > window.scrollY || window.scrollY < 100) {
      setEffect("--visible");
    }
    if (lastScrollY > window.scrollY && window.scrollY < 400) {
      setEffect("--transparent");
    } else if (lastScrollY < window.scrollY && window.scrollY > 100) {
      setEffect("--hidden");
    }
    lastScrollY = window.scrollY;
  });

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <NavbarContainer className={effect}>
      <LogoWrapper className="logo-wrapper">
        <LogoContainer>
          <Logo
            src="/OxRiverLogo.3.png"
            alt="OxRiver Logo"
            onClick={() => navigate("/")}
          />
        </LogoContainer>
      </LogoWrapper>
      <MenuDrop onClick={toggleDropdown} />
      {isDropdownVisible && (
        <MobileNavLinks className="drop-down-menu">
          <DropdownMenu>
            <NavLinkWrapper>
              <NavLink to="/" onClick={toggleDropdown}>
                Home
              </NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <NavLink to="/products" onClick={toggleDropdown}>
                Products
              </NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <NavLink to="/services" onClick={toggleDropdown}>
                Services
              </NavLink>
            </NavLinkWrapper>
          </DropdownMenu>
        </MobileNavLinks>
      )}
      <NavLinks className="nav">
        <NavLinkWrapper>
          <NavLink to="/">Home</NavLink>
        </NavLinkWrapper>
        <NavLinkWrapper>
          <NavLink to="/products">Products</NavLink>
        </NavLinkWrapper>
        <NavLinkWrapper>
          <NavLink to="/services">Services</NavLink>
        </NavLinkWrapper>
      </NavLinks>
    </NavbarContainer>
  );
}
