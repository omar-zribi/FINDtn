import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarCSS from "./PublicNavBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function PublicNavBar() {
  return (
    <div>
      <span className={NavBarCSS.Tnavbar}>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <span id={NavBarCSS.logo}>
                <h1 className={NavBarCSS.h1}>FIND</h1>
                <h6 className={NavBarCSS.h6}>.TN</h6>
              </span>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className={NavBarCSS.link} href="/">
                Home
              </Nav.Link>
              <Nav.Link className={NavBarCSS.link} href="/about">
                About
              </Nav.Link>
              <Nav.Link className={NavBarCSS.link} href="/servises">
                Services
              </Nav.Link>
              <Nav.Link className={NavBarCSS.link} href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </span>
      <span className={NavBarCSS.Dnavbar}>
        <Navbar bg="light" expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">
            <span id={NavBarCSS.logo}>
                <h1 className={NavBarCSS.h1}>FIND</h1>
                <h6 className={NavBarCSS.h6}>.TN</h6>
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                <span id={NavBarCSS.logo}>
                <h1 className={NavBarCSS.h1}>FIND</h1>
                <h6 className={NavBarCSS.h6}>.TN</h6>
              </span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className={NavBarCSS.link} href="/">
                Home
              </Nav.Link>
              <Nav.Link className={NavBarCSS.link} href="/about">
                About
              </Nav.Link>
              <Nav.Link className={NavBarCSS.link} href="/servises">
                Services
              </Nav.Link>
              <Nav.Link className={NavBarCSS.link} href="/contact">
                Contact
              </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </span>
    </div>
  );
}

export default PublicNavBar;
