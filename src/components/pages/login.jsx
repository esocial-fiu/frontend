import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Form, Card } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      newUser: {
        log_email: "",
        log_password: ""
      }
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    var newUser = this.state.newUser;
    newUser[event.target.name] = event.target.value;
    this.setState({
      newUser
    });
  }

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
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="log_email"
                    value={this.state.newUser.log_email}
                    onChange={this.onChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="log_password"
                    value={this.state.newUser.log_password}
                    onChange={this.onChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Link
                    to={{
                      pathname: "/profile",
                      state: {
                        log_email: this.state.newUser.log_email,
                        log_password: this.state.newUser.log_password
                      }
                    }}
                    role="button"
                    className="btn btn-outline-dark btn-md"
                  >
                    Sign in
                  </Link>
                  &nbsp;
                  <Link
                    to="/"
                    role="button"
                    className="btn btn-outline-dark btn-md"
                  >
                    Forgot Password
                  </Link>
                </Col>
                <br />
                <br />
                <Form.Group as={Row}>
                  <Col sm={{ span: 12, offset: 7 }}>
                    <Link to="/register">don't have an account?</Link>
                  </Col>
                </Form.Group>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
