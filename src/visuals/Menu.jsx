import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';

export default function Menu({ onAboutMeOpen, onProjectsOpen, onResumeOpen, onContactOpen }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleAboutMe = () => {
    onAboutMeOpen();
  }

  const toggleProjects = () => {
    onProjectsOpen();
  }

  const toggleResume = () => {
    onResumeOpen();
  }

  const toggleContact = () => {
    onContactOpen();
  }

  const toggle = () => setNavOpen(!navOpen);

    return (
      <div>
        <Navbar color = "salt-box" expand="md" className = "menu fixed-bottom">
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
              <NavItem>
                <button onClick = { toggleResume } className = "button2">Resume</button>
              </NavItem>
              <NavItem>
                <button onClick = { toggleContact } className = "button2">Contact</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}