import styled from "styled-components";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

// Navbar container
export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #000;
  height: 120px;
  padding: 0 2rem;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  &.--hidden {
    transform: translateY(-100%);
  }

  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 0;
  }
`;

// Logo wrapper
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 120px;
  /* width: 100%; */
`;

export const LogoContainer = styled.div`
  height: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    height: 80px;
  }

  @media screen and (max-width: 450px) {
    height: 60px;
  }
`;

// Navigation links for large screens
export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex-direction: row;
  padding: 0;

  button,
  a {
    font-family: Sanchez, serif;
    font-size: 16px;
    font-weight: 500;
    color: white;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkWrapper = styled.li``;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding-bottom: 3px;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: #f7f7f7;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

// Dropdown menu for smaller screens
export const MobileNavLinks = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    background-color: #000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    padding: 1rem 0;
    z-index: 9;
  }
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 1rem;
    text-align: center;

    a {
      text-decoration: none;
      color: white;
      font-size: 1rem;
    }

    &:hover {
      background-color: #222;
    }
  }
`;

// Burger icon for mobile toggle
export const MenuDrop = styled(CiMenuBurger)`
  display: none;
  fill: #fefefe;
  font-size: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
