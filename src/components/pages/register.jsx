import React, { Component } from "react";
import { Col, Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      newUser: {
        new_f_name: "",
        new_l_name: "",
        new_email: "",
        new_birthday: "",
        new_sex: "",
        new_password: "",
        new_categories: ["", "", ""]
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(event) {
    var newUser = this.state.newUser;
    newUser[event.target.name] = event.target.value;
    this.setState({
      newUser
    });
  }

  onChangeCategory(event) {
    var newUser = this.state.newUser;
    newUser.new_categories[event.target.name] = event.target.value;
    this.setState({
      newUser
    });
  }

  submit() {
    const vm = this;
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `mutation {
        userRegister(
          firstName: "${this.state.newUser.new_f_name}",
          lastName: "${this.state.newUser.new_l_name}",
          email: "${this.state.newUser.new_email}",
          birthday: "${this.state.newUser.new_birthday}",
          sex: "${this.state.newUser.new_sex}",
          categoryOptions: [${this.state.newUser.new_categories[0]}, ${
          this.state.newUser.new_categories[1]
        }, ${this.state.newUser.new_categories[2]}]
          ){
            id
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
            width: "70%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="new_f_name"
                    value={this.state.newUser.new_f_name}
                    onChange={this.onChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="new_l_name"
                    value={this.state.newUser.new_l_name}
                    onChange={this.onChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="new_email"
                    value={this.state.newUser.new_email}
                    onChange={this.onChange}
                  />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Sex</Form.Label>
                  <Form.Control
                    as="select"
                    placeholder="Choose.."
                    name="new_sex"
                    value={this.state.newUser.new_sex}
                    onChange={this.onChange}
                  >
                    <option>Choose...</option>
                    <option>F</option>
                    <option>M</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formGridBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  placeholder="MM/DD/YYYY"
                  name="new_birthday"
                  value={this.state.newUser.new_birthday}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="new_password"
                  value={this.state.newUser.new_password}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group controlId="formGridPassword2">
                <Form.Label>Confirm Password*</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password*" />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Hobbies</Form.Label>
                  <Form.Control
                    as="select"
                    name="0"
                    value={this.state.newUser.new_categories[0]}
                    onChange={this.onChangeCategory}
                  >
                    <option>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Sports</Form.Label>
                  <Form.Control
                    as="select"
                    name="1"
                    value={this.state.newUser.new_categories[1]}
                    onChange={this.onChangeCategory}
                  >
                    <option>Choose...</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>School Subjects</Form.Label>
                  <Form.Control
                    as="select"
                    name="2"
                    value={this.state.newUser.new_categories[2]}
                    onChange={this.onChangeCategory}
                  >
                    <option>Choose...</option>
                    <option>5</option>
                    <option>6</option>
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
              <Button variant="dark" type="submit" onClick={this.submit}>
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
