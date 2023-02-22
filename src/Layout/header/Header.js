import React from "react";
import "./header.css";
import { links } from "../../data.js";
import { NavLink } from "react-router-dom";
import { Container, Row, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import AboutImg from "../../assets/images/profile-top.jpg";
const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand className="logo"> <span>SM </span>
             Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar`}
              aria-labelledby={`offcanvasNavbarLabel`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {links.map(({ name, path }, index) => {
                    return (
                      <Nav.Link key={index}>
                        <NavLink to={path}>{name}</NavLink>
                      </Nav.Link>
                    );
                  })}
                </Nav>
                <div className="nav_img_section d-flex justify-content-center align-items-center">
                  <img src={AboutImg} className="img-fluid" alt="AboutImage" />
                </div>
                <div className="hot_mail">
                  <AiOutlineMail className="hot_mail_icon" />
                  <h6>
                    <NavLink to="/contact"> sm.feroj27@gmail.com</NavLink>
                  </h6>
                </div>
                <div className="contact_section">
                  <div className="discover">
                    <h2> Connect</h2>
                  </div>
                  <div className="nav_icons">
                    <a href="mailto:sm.feroj27@gmail.com" target="/">
                      <AiOutlineMail className="contact_option-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/sm-feroj-94b300249/" target= "/"
                    >
                      <AiFillLinkedin className="contact_option-icon" />
                    </a>
                    <a
                      href="https://web.whatsapp.com/send?phone+8801724703700" target= "/"
                    >
                      <ImWhatsapp className="contact_option-icon" />
                    </a>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
};

export default Header;
