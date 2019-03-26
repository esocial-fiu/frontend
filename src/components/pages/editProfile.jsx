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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchUser() {
    const vm = this;
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `query {
        me{
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
  handleSubmit = event => {
    const ue = event.target.value;
    console.log(ue);
  };
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
            <Card.Title>Edit Profile</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              personal details
            </Card.Subtitle> */}
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="formFirstName">
                <Form.Label column sm="2">
                  First Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder={
                      this.state.user ? this.state.user.me.firstName : "null"
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
                      this.state.user ? this.state.user.me.lastName : "null"
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
                      this.state.user ? this.state.user.me.email : "null"
                    }
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
                      this.state.user ? this.state.user.me.birthday : "null"
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
                      this.state.user ? this.state.user.me.sex : "null"
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
                    placeholder={
                      this.state.user
                        ? this.state.user.me.categoryOptions.map(
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
              to="/profile"
              className="btn btn-outline-dark btn-lg"
              role="button"
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
