import React, {Component} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import styles from '../../static/css/common.css';

class Header extends Component {
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">A</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/">CATEGORY</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/apply">APPLY</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dashboard">DASHBOARD</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">ABOUT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;