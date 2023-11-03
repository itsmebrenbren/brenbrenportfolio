import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
        <Navbar color="salt-box" light expand="md">
          <NavbarBrand href="/" className = "menu text-romantic">Brenna Baker</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" className = "navtext text-wax-flower">LinkedIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className = "navtext text-wax-flower">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className = "navtext text-wax-flower">Resume</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className = "navtext text-wax-flower">Projects</DropdownToggle>
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