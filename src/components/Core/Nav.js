import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import color from '../../config/Color';

const NavIcon = styled.div`
  width: 15%;
  text-align: center;
  cursor: pointer;
  .navbar-toggler {
    border: 0px;
  }
`;

const Logo = styled.img`
  width: 35px;
  height: 48px;
`;

const NavStyle = styled(Nav)`
  a {
    color: ${color.font};
  }
  a:hover {
    color: ${color.blue};
  }
`;

const Collapse = styled.div`
  background-color: ${color.white};
  visibility: ${props => props.visibility};
  height: 20vh;
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 65px;
  left: 0px;
  right: 0px;
  text-align: right;
  transition: all 1s;
  a {
    color: ${color.font};
  }
`;
class NavBar extends Component {
  state = {
    collapsed: true,
    crossNav: false,
  };

  handleClick = bool => {
    this.setState({
      crossNav: !bool,
    });
  };

  render() {
    const { crossNav } = this.state;
    const { navbarItems } = this.props;
    return (
      <React.Fragment>
        <Navbar className="d-md-none sticky-top" color="white" light>
          <NavbarBrand href="/" className="mr-auto">
            <Logo src="img/footer.png" />
          </NavbarBrand>
          <NavIcon onClick={() => this.handleClick(crossNav)}>
            {crossNav ? <h3>X</h3> : <NavbarToggler />}
          </NavIcon>
          <Collapse isOpen={crossNav} visibility={crossNav ? 'visible' : 'hidden'}>
            {navbarItems.map((data, i) => (
              <NavLink href={data.href} key={i}>
                {data.label}
              </NavLink>
            ))}
          </Collapse>
        </Navbar>
        <Navbar color="white" expand="md" className="d-none d-md-block d-xl-block sticky-top">
          <NavStyle className="justify-content-center">
            {navbarItems.map((data, i) => (
              <NavItem key={i}>
                <div className="hvr-underline-from-center">
                  <NavLink href={data.href}>{data.label}</NavLink>
                </div>
              </NavItem>
            ))}
          </NavStyle>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
