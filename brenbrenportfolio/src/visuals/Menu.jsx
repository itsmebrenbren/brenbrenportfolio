import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
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
        <Navbar color="salt-box" expand="md">
          <NavbarBrand href="/" className = "menu text-romantic">Brenna Baker</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
              <UncontrolledDropdown nav inNavbar>
                <button nav caret className = "button2">
                    <DropdownToggle nav caret className = "navtext text-wax-flower">Projects</DropdownToggle>
                </button>
                <DropdownMenu right className = "bg-wax-flower border-wax-flower">
                  <DropdownItem className = "navtext text-salt-box">Dog-a-doo card games</DropdownItem>
                  <DropdownItem className = "navtext text-salt-box">Pacman Thing</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className = "navtext text-salt-box">Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}