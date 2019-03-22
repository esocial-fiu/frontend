import React, { Component } from "react";
import { Col, Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          style={{
            width: "70%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Sex</Form.Label>
                  <Form.Control as="select" placeholder="Choose..">
                    <option>Choose...</option>
                    <option>F</option>
                    <option>M</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formGridBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control placeholder="MM/DD/YYYY" />
              </Form.Group>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formGridPassword2">
                <Form.Label>Confirm Password*</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password*" />
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
              <Form.Group id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  required
                  label="Agree to terms and conditions"
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
              &nbsp;
              <Button variant="dark" type="submit">
                {" "}
                <Link to="/" style={{ color: "white" }}>
                  Cancel
                </Link>
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Register;
