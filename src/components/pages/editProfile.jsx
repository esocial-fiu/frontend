import React, { Component } from "react";
import Axios from "axios";
import { Row, Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      editUser: {
        editedFname: "",
        editedLname: "",
        editedEmail: "",
        editedBirthday: "",
        editedSex: "",
        editedCategories: []
      }
    };
    this.cancel = this.cancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            password,
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

  handleSubmit = event => {
    const ue = event.target.value;
    // TODO:: edit user fields
    console.log(ue);
  };

  componentDidMount() {
    this.fetchUser();
  }

  cancel() {
    this.setState({
      user: null
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
            width: "80%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
            <Card.Title>Edit Profile</Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="formFirstName">
                <Form.Label column sm="2">
                  First Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder={
                      this.state.user
                        ? this.state.user.userLogin.firstName
                        : "null"
                    }
                    value={this.state.editUser.editedFname}
                    onChange={this.handleSubmit}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formLastName">
                <Form.Label column sm="2">
                  Last Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    placeholder={
                      this.state.user
                        ? this.state.user.userLogin.lastName
                        : "null"
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    placeholder={
                      this.state.user ? this.state.user.userLogin.email : "null"
                    }
                    readOnly
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formBirthday">
                <Form.Label column sm="2">
                  Birthday
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    placeholder={
                      this.state.user
                        ? this.state.user.userLogin.birthday
                        : "null"
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formSex">
                <Form.Label column sm="2">
                  Sex
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    placeholder={
                      this.state.user ? this.state.user.userLogin.sex : "null"
                    }
                    as="select"
                  >
                    <option>M</option>
                    <option>F</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formCategories">
                <Form.Label column sm="2">
                  Categories
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    readOnly
                    placeholder={
                      this.state.user
                        ? this.state.user.userLogin.categoryOptions.map(
                            category => category.name + " "
                          )
                        : "null"
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Hobbies</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>Coding</option>
                    <option>Roller Skating</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Sports</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>Soccer</option>
                    <option>Volleyball</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>School Subjects</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>Mathematics</option>
                    <option>Programming I</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
            </Form>
            <Link
              to="/profile"
              className="btn btn-outline-dark btn-lg"
              role="button"
            >
              Save
            </Link>
            &nbsp;
            <Link
              to={{
                pathname: "/profile",
                state: {
                  log_email: this.state.user
                    ? this.state.user.userLogin.email
                    : "null",
                  log_password: this.state.user
                    ? this.state.user.userLogin.password
                    : "null"
                }
              }}
              className="btn btn-outline-dark btn-lg"
              role="button"
              onClick={this.cancel}
            >
              Cancel
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EditProfile;
