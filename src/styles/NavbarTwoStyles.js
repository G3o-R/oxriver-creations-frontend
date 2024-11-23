import styled from "styled-components";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion";

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  background-color: #000;
  height: 105px;
  padding: 0;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  padding-top: 20px;
  
  &.--hidden {
    transform: translateY(-120%);
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0;
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
    justify-content: center;
  }

`;

export const NavContainer = styled.div`
position: static;
top: auto;
left: 0;
right: 0;
width: 100%;

@media screen and (max-width: 768px){
  position: absolute;
  top: 105px;
}
`;

export const MotionNav = styled(motion.nav)`
  overflow: "visible";
  width: auto;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`;


export const LogoWrapper = styled.div`
  max-height: 120px;
`;

export const LogoContainer = styled.div`
  height: 100%;
  object-fit: contain;
  max-width: 100vw;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;

  svg{
    &.OxRiver-creations{
      height: 80px;
    }
    &.logo{
      height: 80px;
    }

  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: none;
  justify-content: center;
  background-color: #080808;
  border-radius: 0px 0px 10px 10px;
  height: 20px;
  @media screen and (max-width: 768px){
      display: flex;
  }
`

export const MenuDrop = styled(CiMenuBurger)`
  height: 100%;
  color: #fefefe;
  font-size: 2rem;
  cursor: pointer;
  stroke-width: 1;
  transition: stroke-width 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    color: #fff;
    stroke-width: 2;
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 10px;
    align-self: center;
  }
`;

export const NavLinks = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 20px;
width: 100%;
background-color: #000;
box-shadow: none;
padding: 10px 0px;

@media screen and (max-width: 768px) {
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 0px;
  
  &.mobile {
    background-color: #000;
    overflow: hidden;
    width: 100%;
  }
  
  &.mobile.active {
    visibility: visible;
  }
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


