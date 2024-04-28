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
        <li><MenuButton to="aboutSection" smooth={true} duration={1000}>About</MenuButton></li>
        <li><MenuButton to="tokenomicsSection" smooth={true} duration={1000}>Tokenomics</MenuButton></li>
        <li><MenuButton to="roadmapSection" smooth={true} duration={1000}>Roadmap</MenuButton></li>
      </ul>
    </Container>
  );
}