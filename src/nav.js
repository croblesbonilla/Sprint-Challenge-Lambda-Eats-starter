import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Pizza from "./pizza";
import {
    Route,
    HashRouter
  } from "react-router-dom";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <HashRouter>
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Lambda Eats</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/pizza">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
       <Switch>
         <Route path="/">
             <Home/>
         <Route path="/pizza">
             <Pizza/>
       </Switch>
     

       </HashRouter>
  );
}

export default NavBar;