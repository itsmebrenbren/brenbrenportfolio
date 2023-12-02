import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
 } from 'reactstrap';

export default function Menu({ onAboutMeOpen, onProjectsOpen }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleAboutMe = () => {
    onAboutMeOpen();
  }

  const toggleProjects = () => {
    onProjectsOpen();
  }

  const toggle = () => setNavOpen(!navOpen);

    return (
      <div>
        <Navbar expand="md" className = "menu fixed-bottom">
          <NavbarBrand href = "/" className = "brand text-romantic">Brenna Baker</NavbarBrand>
          <NavbarToggler onClick = { toggle } />
          <Collapse isOpen = { navOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <button onClick = { toggleAboutMe } className = "button2">About Me</button>
              </NavItem>
              <NavItem>
                <button onClick = { toggleProjects } className = "button2">Projects</button>
              </NavItem>
            </Nav>
          </Collapse>
            <a href = "https://github.com/itsmebrenbren" target = "_blank" rel = "noopener noreferrer" 
              className = "button2 a bg-brandy-rose float-end"
            >
              Github
            </a>
            <a href = "https://www.linkedin.com/in/brenna-baker-5a42651a0/" target = "_blank" rel = "noopener noreferrer" 
              className = "button2 a bg-brandy-rose float-end"
            >
              LinkedIn
            </a>
        </Navbar>
      </div>
    )
}