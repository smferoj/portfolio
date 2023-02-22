import React from "react";
import "./home.css";
import MyImg from "../../assets/images/profile-top.jpg";
import Portfolio from "../portfolio/Portfolio";
import Contact from "./../contact/Contact";
import TypeWriter from "../../components/typewriter/Typewriter";
import { FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMongodb, SiMaterialui } from "react-icons/si";
import Socials from "../../components/socials/Socials";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../Layout/footer/Footer";
import AboutMe from "../aboutMe/About";

const Home = () => {
  return (
    <>
      <div id="home">
        <Container>
          <Row>
            <Col md={7} sm={12} className="col_left">
              <div class="col_left_desc">
                <h3> Hello, This is </h3>
                <h1> Portfolio of SM </h1>
                <TypeWriter />
                <div className="home_btn">
                  <a href="#portfolio" className="btn btn-primary">
                    Showcase
                  </a>
                  <a href="#contact" className="btn btn_outlined">
                    Conatct
                  </a>
                </div>
              </div>
              <Socials />
            </Col>
            <Col md={5} sm={12} className="col_right">
              <div class="home_img_section">
                <div class="home_img">
                  <img src={MyImg} class="img-fluid" alt="profileimg"/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="experience_logo">
        <DiJavascript />
        <FaNodeJs />
        <FaReact />
        <SiMongodb />
        <FaBootstrap />
        <SiMaterialui />
      </div>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
    </>
  );
};

export default Home;
