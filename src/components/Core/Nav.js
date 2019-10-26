import React, { Component, useState } from 'react';
import styled from 'styled-components';
import api from './api';
import { Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class NavBar extends Component {
  state  = {
    navbarItems: [],
    collapsed:true,
    crossNav:false,
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
    const { navbarItems,setCollapsed,collapsed,crossNav } = this.state;
    return (
      <React.Fragment>
        <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <button onClick={() => this.handleClick(crossNav)}>
          {crossNav ? <h3>X</h3>:<NavbarToggler/>}
        </button>
        <Collapse isOpen={crossNav} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
    );
  }
}

export default NavBar;