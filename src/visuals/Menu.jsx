import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color = "salt-box" expand="md" className = "menu">
          <NavbarBrand href = "/" className = "brand text-romantic">Brenna Baker</NavbarBrand>
          <NavbarToggler onClick = { this.toggle } />
          <Collapse isOpen = { this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <button className = "button2">LinkedIn</button>
              </NavItem>
              <NavItem>
                <button className = "button2">GitHub</button>
              </NavItem>
              <NavItem>
                <button className = "button2">Resume</button>
              </NavItem>
              <NavItem>
                <button className = "button2">Projects</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}