import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Logo from "../assets/Logo DU.png";
import { NavButton } from "./button";
import styles from "../Style/mobile.module.css";

class NavMenu extends Component {
  state = {
    isOpen: false,
    navMenu: [
      {
        name: "Kelas",
        link: "#Kelas"
      },
      {
        name: "Pengajar",
        link: "#Pengajar"
      },
      {
        name: "Tempat",
        link: "#Tempat"
      },
      {
        name: "Jadwal",
        link: "#Jadwal"
      },
      {
        name: "Kontak",
        link: "#Kontak"
      }
    ]
  };

  handleTogle = () => {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const state = this.state;
    return (
      <div className='container-fluid'>
        <Navbar light expand='md' className='py-4'>
          <NavbarBrand
            href='/'
            style={{ margin: "0" }}
            className={`${styles.navBrand} pl-4`}>
            <img src={Logo} alt='' className={styles.navbarImg} />
          </NavbarBrand>
          <NavbarToggler onClick={this.handleTogle} />
          <Collapse isOpen={state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {state.navMenu.map((nav, key) => {
                return (
                  <NavItem key={key}>
                    <NavLink href={nav.link}>
                      <NavButton>{nav.name}</NavButton>
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;
