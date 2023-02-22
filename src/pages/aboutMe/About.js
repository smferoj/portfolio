import React, { useState } from "react";
import "./aboutme.css";
import { NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "react-bootstrap";
import { BsCheckSquare } from "react-icons/bs";
import AboutImg from "../../assets/images/my-profile.jpg";
import Table from "react-bootstrap/Table";

function About() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div id="about">
      <Container>
        <div className="about_title">
        <h2> ABOUT ME </h2> 
        </div>
     
          <Row> 
            <div className="top_row">
              <div className="about_me_image">
                <img src={AboutImg} alt="about-img" />
                <div className="features">
                  <h5> Key Features</h5>
                  <span> <BsCheckSquare/> Multitask</span>
                  <span> <BsCheckSquare/> Professional</span>
                  <span> <BsCheckSquare/> Quick Response</span>
                  <span> <BsCheckSquare/> Remote Service</span>
                  <span> <BsCheckSquare/> Endless Support</span>
                </div>
              </div>
              <div className="about_text">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <p>
                        Hi! I am a <span>
                          Web developer focusing on react{" "}
                        </span>{" "}
                        Read more.........{" "}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      I always try to use well-establised
                      rationalised softwares and tools that keeps the project in pace with present times. I offer the standard,
                      perfect, well-researched, and
                      enticing contents. It is my utmost trying to manage
                      time-sensitive changes and updates that surely satisfy
                      your demand.
                      <div className="accordion_btn">
                        <button className="btn">
                        <NavLink to="/contact">Connect Me</NavLink>
                        </button> 
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
    
              </div>
            </div>
      </Row>
      <Row>
          <Col>
            <div className="about_cards">
              <div className="about_cards_title">
                <h3> Major Information</h3>
              </div>
              <div className="card_container">
                <div className="bloc-tabs">
                  <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                  >
                    General
                  </button>
                  <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                  >
                    Qualifications
                  </button>
                  <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                  >
                    Experiences
                  </button>
                  <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                  >
                    Skills
                  </button>
    
                </div>

                <div className="content-tabs">
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    <div className="general">
                      <Table striped bordered hover size="sm">
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td> SM Feroj </td>
                          </tr>
                          <tr>
                            <td>Date of Birth</td>
                            <td>Oct 1979</td>
                          </tr>
                          <tr>
                            <td>Designation</td>
                            <td>Assistant Professor</td>
                          </tr>  
                          <tr>
                            <td>Employer</td>
                            <td>Ministry of Education</td>
                          </tr>  
                          
                          <tr>
                            <td>Working Station</td>
                            <td>Dhaka, Bangladesh</td>
                          </tr>  
                          <tr>
                            <td>Skill</td>
                            <td> Teaching & Programming (web design and Web devlopment)</td>
                          </tr>
                          <tr>
                            <td>working type</td>
                            <td>Direct or Remote</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>

                  <div
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }
                  >

                   {/*      Education and Training */}
                    <div className="education ">
                      <Table striped bordered hover size="sm">
                        <tbody>        
                          <tr>
                            <th> Courses/Subjects </th>
                            <th> Topic </th>
                          </tr>
                          <tr>
                            <td> Redux </td>
                            <td> Redux, React-redux, thunk </td>
                          </tr>
                          <tr>
                            <td> Web-Design</td>
                            <td> html, css, js, jquery, bs, mui</td>
                          </tr>
                          <tr>
                            <td>Web-Devlopment </td>
                            <td>  react, express, mongo db, mysql </td>
                          </tr>
                          <tr>
                            <td>Phd</td>
                            <td>Water Quality and Climate Change</td>
                          </tr>
                          <tr>
                            <td>Mphil</td>
                            <td>Water Quality and Climate Change</td>
                          </tr>
                          <tr>
                            <td>Masters</td>
                            <td>Chemistry</td>
                          </tr>
                          <tr>
                            <td>Graduation</td>
                            <td>1999</td>
                          </tr>
                          
                         
                         
          
                        </tbody>
                      </Table>
                    </div>
                  </div>

                  <div
                    className={
                      toggleState === 3 ? "content  active-content" : "content"
                    }
                  >
                         {/*  Experience*/}
                    <div className="experience ">
                      <Table striped bordered hover size="sm">
                        <tbody> 
                          <tr>
                            <th> title </th>
                            <th> duration  </th>
                            <th> Major works </th>
                            
                          </tr>
                          <tr>
                            <td> Lecturer of Chemistry</td>
                            <td>2008-2014</td>
                            <td> Teaching, Office managment, Data entry</td>
                           
                          </tr>
                          <tr>
                            <td> Assistant Professor of Chemistry</td>
                            <td>2014- ongoing</td>
                            <td> Teaching , Office managment, Data entry</td>
                          </tr>
                          <tr>
                            <td> Research work</td>
                            <td>2016-2021</td>
                            <td> Sample Anlysis, Assessent, Thesis composing, Article writing etc</td>
                          </tr>
                          <tr>
                            <td>Web Design and Development</td>
                            <td>2021-2023</td>
                            <td> Completing full front-end  and back-ent projects</td> 
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  <div
                    className={
                      toggleState === 4 ? "content  active-content" : "content"
                    }
                  >
                     <div className="experience ">
                      <Table striped bordered hover size="sm">
                        <tbody> 
                          <tr>
                            <th> Data-Entry </th>
                            <th> Front-end Design </th>
                            <th> Back-end Design </th>
                            
                          </tr>
                          <tr>
                            <td> MS Word, MS Excel, MS Powerpoint, Photoshop, Canva, Spss, Arc Gis, graphic design etc.</td>
                            <td>html, css, javascript, bootstrap, Material UI, MDB, Antd, Chakra, Tailwind Css etc. </td>
                            <td> Node Js, Express Js, Mongo DB,  MySQL, Firebae, Firestore ete</td>        
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  <div
                    className={
                      toggleState === 5 ? "content  active-content" : "content"
                    }
                  >
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
