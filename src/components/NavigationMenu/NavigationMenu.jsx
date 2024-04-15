import {Link} from 'react-scroll';
import { useState } from 'react';
import {Container} from "./styledComponents.js";

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Container isOpen={isOpen}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <ul>
        <li><Link to="section1" smooth={true} duration={1000}>Section 1</Link></li>
        <li><Link to="section2" smooth={true} duration={1000}>Section 2</Link></li>
        <li><Link to="section3" smooth={true} duration={1000}>Section 3</Link></li>
      </ul>
    </Container>
  );
}