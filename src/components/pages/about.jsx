import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

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
            width: "80%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
            <Card.Title>About us</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">eSocial</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/register">Join Now</Link>
            &nbsp; &nbsp;
            <Link to="/login">Login</Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default About;
