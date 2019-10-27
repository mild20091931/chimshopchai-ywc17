import React, { Component, useState } from 'react';
import styled from 'styled-components';
import api from './apiService';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavIcon = styled.div`
  width: 15%;
  text-align: center;
  cursor: pointer;
  .navbar-toggler{
    border:0px;
  }
`
class NavBar extends Component {
  state  = {
    navbarItems: [],
    collapsed: true,
    crossNav: false,
  }

  componentDidMount = async () =>{
    let data = await api.getData();
    this.handleData(data.data.navbarItems);
  }

  handleData = async (items) => {
    this.setState({
      navbarItems : items
    })
  }

  handleClick = (bool) => {
    this.setState({
      crossNav: !bool
    })
  }

  render() {
    const { crossNav,navbarItems } = this.state;
    return (
      <React.Fragment>
        <Navbar className="d-md-none sticky-top" color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavIcon onClick={() => this.handleClick(crossNav)}>
            {crossNav ? <h3>X</h3> : <NavbarToggler/>}
        </NavIcon>
        <Collapse isOpen={crossNav} navbar>
          <Nav className="nav justify-content-center" navbar>
          {navbarItems.map((data,i) => (
            <React.Fragment>
              <NavItem>
                <NavLink href={data.href}>{data.label}</NavLink>
              </NavItem>
            </React.Fragment>
          ))}
          </Nav>
        </Collapse>
      </Navbar>
      <Navbar color="faded" light expand="md" className="d-none d-md-block d-xl-block sticky-top">
        <Nav className="nav justify-content-center" navbar>
          {navbarItems.map((data,i) => (
            <React.Fragment>
              <NavItem>
                <NavLink href={data.href}>{data.label}</NavLink>
              </NavItem>
            </React.Fragment>
          ))}
        </Nav>
      </Navbar>
    </React.Fragment>
    );
  }
}

export default NavBar;