// src/components/nav-bar.js

import React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './login-button';
import LogoutButton from './logout-button';

const MainNav = () => (
  <Nav classname="mr-auto">
    <Nav.Link
    as={RouterNavLink}
    to="/"
    exact
    activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
    as={RouterNavLink}
    to="/profile"
    exact
    activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
    <Nav.Link
    as={RouterNavLink}
    to="/external-api"
    exact
    activeClassName="router-link-exact-active"
    >
      ExternalApi
      </Nav.Link>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Nav classname="justify-content-end">
      {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand as={RouterNavLink} className="logo" to="/"></Navbar.Brand>
          <MainNav />
          <AuthNav />
        </Container>
      </Navbar>
  );
};

export default NavBar;