import React, { Component } from "react";
import Axios from "axios";

import { Link } from "react-router-dom";
import { Row, Col, Form, Card, Button } from "react-bootstrap";

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
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    var newUser = this.state.newUser;
    newUser[event.target.name] = event.target.value;
    this.setState({
      newUser
    });
  }

  submit() {
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `mutation {
        userLogin(
          username: "${this.state.newUser.log_email}",
          password: "${this.state.newUser.log_password}"
          ){
            email
          }
        }`
      }
    }).then(result => {
      console.log(result);
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
                  <Button variant="dark" onClick={this.submit}>
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
