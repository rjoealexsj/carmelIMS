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
Vidya Jyoti Residence
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Staff
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
            Students
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              First Years
            </DropdownItem>
            <DropdownItem>
              Second Years
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Third Years
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
<NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            portfolios
          </NavLink>
        </NavItem>

      </Nav>
      <NavbarText>
      <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Menu
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Information
            </DropdownItem>
            <DropdownItem>
              Feature
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Contact Us
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        
      </NavbarText>

    </Collapse>
  </Navbar>
</div>    
            </div>
        )
    }
}
