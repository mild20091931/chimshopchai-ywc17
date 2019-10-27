import React, { Component } from 'react';
import styled from 'styled-components';
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
  constructor(props) {
    super(props);
    this.navbarItems = this.props.navbarItems
  }
  
  state  = {
    collapsed: true,
    crossNav: false,
  }

  handleClick = (bool) => {
    this.setState({
      crossNav: !bool
    })
  }

  render() {
    const { crossNav } = this.state;
    const { navbarItems } = this.props;
    return (
      <React.Fragment>
        <Navbar className="d-md-none sticky-top" color="white" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavIcon onClick={() => this.handleClick(crossNav)}>
            {crossNav ? <h3>X</h3> : <NavbarToggler/>}
        </NavIcon>
        <Collapse isOpen={crossNav} navbar>
          <Nav className="nav justify-content-center" navbar>
          {navbarItems.map((data,i) => (
            <React.Fragment  key={i}>
              <NavItem>
                <NavLink href={data.href}>{data.label}</NavLink>
              </NavItem>
            </React.Fragment>
          ))}
          </Nav>
        </Collapse>
      </Navbar>
      <Navbar color="white" light expand="md" className="d-none d-md-block d-xl-block sticky-top">
        <Nav className="nav justify-content-center" navbar>
          {navbarItems.map((data,i) => (
            <React.Fragment  key={i}>
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