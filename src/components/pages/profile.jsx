import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Form, Card } from "react-bootstrap";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      newUser: {
        log_email: "",
        log_password: ""
      }
    };
  }

  fetchUser() {
    const vm = this;
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `mutation {
        userLogin(
          username: "${this.props.location.state.log_email}",
          password: "${this.props.location.state.log_password}"
          ){
            id,
            firstName,
            lastName,
            email,
            birthday,
            sex,
            categoryOptions {
              name
            }
          }
        }`
      }
    }).then(result => {
      vm.setState({
        user: result.data.data
      });
    });
  }

  componentDidMount() {
    this.fetchUser();
  }
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
            <Card.Title>My Profile</Card.Title>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextFirstName">
                <Form.Label column sm="2">
                  First Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value={
                      this.state.user
                        ? this.state.user.userLogin.firstName
                        : "null"
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextLastName">
                <Form.Label column sm="2">
                  Last Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value={
                      this.state.user
                        ? this.state.user.userLogin.lastName
                        : "null"
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value={
                      this.state.user ? this.state.user.userLogin.email : "null"
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextBirthday">
                <Form.Label column sm="2">
                  Birthday
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value={
                      this.state.user
                        ? this.state.user.userLogin.birthday
                        : "null"
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextSex">
                <Form.Label column sm="2">
                  Sex
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value={
                      this.state.user ? this.state.user.userLogin.sex : "null"
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextCategories">
                <Form.Label column sm="2">
                  Categories
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value={
                      this.state.user
                        ? this.state.user.userLogin.categoryOptions.map(
                            category => category.name + " "
                          )
                        : "null"
                    }
                  />
                </Col>
              </Form.Group>
            </Form>
            <Link
              to="/editprofile"
              className="btn btn-outline-dark btn-lg"
              role="button"
            >
              Edit Profile
            </Link>
            &nbsp;
            <Link
              to="/events"
              className="btn btn-outline-dark btn-lg"
              role="button"
            >
              Events
            </Link>
            &nbsp;
            <Link
              to="/login"
              className="btn btn-outline-dark btn-lg"
              role="button"
            >
              Sign Out
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Profile;
