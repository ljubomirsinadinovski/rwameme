import { useState } from 'react';
import {Container, MenuButton} from "./styledComponents.js";

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Container $isOpen={isOpen}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <ul>
        <li><MenuButton to="section1" smooth={true} duration={1000}>Home</MenuButton></li>
        <li><MenuButton to="section2" smooth={true} duration={1000}>About</MenuButton></li>
        <li><MenuButton to="section3" smooth={true} duration={1000}>Tokenomics</MenuButton></li>
        <li><MenuButton to="section4" smooth={true} duration={1000}>Roadmap</MenuButton></li>
      </ul>
    </Container>
  );
}