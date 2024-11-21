import styled from "styled-components";
import OxRiverLogo from "../images/OxRiverLogo.3.png";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  gap: 30px;
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
    justify-content: center;
    padding: 0;
    /* flex-direction:column; */
    background-position: center;
  }
`;

export const StyledSection = styled.section`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px){
    max-width:85%;
    width: 100%;
    justify-content: space-between;
  }

`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 120px;
`;

export const LogoContainer = styled.div`
  height: 100%;
  object-fit: contain;
  max-width: 400px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
`;

export const MenuDrop = styled(CiMenuBurger)`
  display: none;
  color: #fefefe;
  font-size: 2rem;
  cursor: pointer;
  stroke-width: 1;
  transition: stroke-width 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover{
    color: #fff;
    stroke-width: 2;
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 0 20px;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.mobile {
    background-color: #000;
    overflow: hidden;
    width: 100%;
  }
  
  &.mobile.active {
    visibility: visible;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    gap: 20px;
    background-color: transparent;
    box-shadow: none;
  }
`;


export const LinkWrapper = styled.div`
  @media screen and (max-width: 768px){
    width: 100%;
    max-height: 6rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #222222;
    border-top: 1px solid #212121;
    border-bottom: 1px solid #363636 ;
  }

`;

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

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 3em;
  }

`;


