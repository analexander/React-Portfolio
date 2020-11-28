import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Angel Alexander</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/about/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/analexander" target="_blank">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/angel-alexander-1171571a5/" target="_blank">LinkedIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://docs.google.com/document/d/e/2PACX-1vRIDbxm8dCUo8dCUXuqeNqHuIv-RgfXakkY2m0QcuETLT1fyBXTWUoihEOijebva6fRYUcEJVCUPfjp/pub" target="_blank">Resume</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;