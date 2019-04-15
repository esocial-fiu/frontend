import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import pic from "../../images/home1.jpg";
import ale from "../../images/alejandro.jpg";
import franck from "../../images/franck.jpg";
import vicente2 from "../../images/vicente.jpg";

class About extends Component {
  state = {};
  render() {
    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          style={{
            width: "100%",
            marginTop: "30px",
            borderRadius: "20px"
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "50px" }}>About us</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontSize: "30px" }}
            >
              eSocial
            </Card.Subtitle>
            &nbsp;
            <Card.Text>
              &emsp; The idea started with FIU students who wanted to have a
              companion so that they wouldn’t eat alone. There is not an
              application out there that can provide students with the
              opportunity to meet strangers who share common interests with
              them. A lot of students are hesitant to approach strangers and
              would rather be alone than an attempt to make friends. This
              application would dismiss that fear of approaching a “complete”
              stranger, and allow users to meet others with common interests. We
              took the idea of having a meal with a stranger and evolved it into
              creating social events around campus so a student could decide
              what activity they choose to meet new friends.
            </Card.Text>
            <br />
            <Card.Title>Meet the creators</Card.Title>
            <CardDeck>
              <Card>
                <Card.Img
                  variant="top"
                  src={ale}
                  style={{ height: "250px", width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>Alejandro Perez</Card.Title>
                  <Card.Text style={{ fontStyle: "italic" }}>
                    "I’m a developer with more than 7 years of experience on the
                    web. I am excited about the project because I think it could
                    really help the students that come from out of town to study
                    here at FIU to find new friends and people with the same
                    interests."
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 5 days ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src={pic}
                  style={{ height: "250px", width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>Enzo Mendoza</Card.Title>
                  <Card.Text style={{ fontStyle: "italic" }}>
                    "My expertise includes Java, SQL, C, and Python. I have also
                    been praised by previous professors for my writing
                    abilities, so I can use skill to help in the documentation.
                    For this project, however, I am learning HTML, CSS and React
                    as I am partly responsible for the front end of the
                    application."
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 5 days ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src={vicente2}
                  style={{ height: "250px", width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>Vicente Maselli</Card.Title>
                  <Card.Text style={{ fontStyle: "italic" }}>
                    "Experienced as a full stack developer that has previously
                    built an internal single-page application for work using the
                    Waterfall methodology. The stack I have experience is in
                    Angular 6, Material, MS SQL server, REST API in C#. I look
                    forward to show and teach my fellow peers all my skills."
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 5 days ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src={franck}
                  style={{ height: "250px", width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>Franck Laguerre</Card.Title>
                  <Card.Text style={{ fontStyle: "italic" }}>
                    "I started as a mainframe developer. I have experience with
                    COBOL, Db2, Jcl. I also have experience working with Big
                    data, Java, map reduce, hive. I was introduced to Pega last
                    year and get my CSA certification the same year. I always
                    want my program to be perfect. I also have experience
                    working on an agile team."
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 5 days ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
            <br />
            <Link
              to="/register"
              style={{ color: "white" }}
              role="button"
              className="btn btn-dark btn-md"
            >
              Join Now
            </Link>
            &nbsp; &nbsp;
            <Link
              to="/login"
              style={{ color: "white" }}
              role="button"
              className="btn btn-dark btn-md"
            >
              Login
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default About;
