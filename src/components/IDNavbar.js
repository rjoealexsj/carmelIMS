import React, { Component } from 'react'
import {Navbar,NavbarBrand, NavbarToggler,NavItem, NavLink, Collapse,UncontrolledDropdown,DropdownToggle,DropdownMenu, DropdownItem,Nav,NavbarText} from 'reactstrap'; 
export default class IDNavbar extends Component {
    render() {
        return (
            <div>
            <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    fixed="top"
    full
  >
    <NavbarBrand href="/">
    vidyajyoti
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
</div>    
            </div>
        )
    }
}
