import React from "react";
import Navbar from "react-bootstrap/Navbar"

function Navigation(props) {
  return (
      <Navbar bg="dark" fixed="top" variant="dark">
        <Navbar.Brand href="#home">Lorum Brand Ipsum</Navbar.Brand>
      </Navbar>
  );
}

export default Navigation;
