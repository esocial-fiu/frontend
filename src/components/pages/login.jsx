import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Form, Card, Button } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          style={{
            width: "55%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
            <Form>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button variant="dark">
                    <Link to="/profile" style={{ color: "white" }}>
                      Sign in
                    </Link>
                  </Button>
                  &nbsp;
                  <Button variant="dark">
                    <Link to="/profile" style={{ color: "white" }}>
                      Forgot Password
                    </Link>
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
