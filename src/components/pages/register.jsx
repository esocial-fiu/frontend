import React, { Component } from "react";
import { Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      categories: null,
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

    // IMPORTANT!!
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

  fetchCategories() {
    const vm = this;
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `query {
          categories{
            name
             id
             categoryOptions{
              name
              id
             }
           }
        }`
      }
    }).then(result => {
      vm.setState({
        categories: result.data.data
      });
    });
  }

  submit() {
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

  componentDidMount() {
    this.fetchCategories();
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
                  <Form.Label>
                    {this.state.categories
                      ? this.state.categories.categories[0].name
                      : "null"}
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="0"
                    value={this.state.newUser.new_categories[0]}
                    onChange={this.onChangeCategory}
                  >
                    <option>Choose...</option>
                    <option>
                      {this.state.categories
                        ? this.state.categories.categories[0].categoryOptions[0]
                            .name
                        : "null"}
                    </option>
                    <option>
                      {this.state.categories
                        ? this.state.categories.categories[0].categoryOptions[1]
                            .name
                        : "null"}
                    </option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>
                    {this.state.categories
                      ? this.state.categories.categories[1].name
                      : "null"}
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="1"
                    value={this.state.newUser.new_categories[1]}
                    onChange={this.onChangeCategory}
                  >
                    <option>Choose...</option>
                    <option>
                      {this.state.categories
                        ? this.state.categories.categories[1].categoryOptions[0]
                            .name
                        : "null"}
                    </option>
                    <option>
                      {this.state.categories
                        ? this.state.categories.categories[1].categoryOptions[1]
                            .name
                        : "null"}
                    </option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>
                    {" "}
                    {this.state.categories
                      ? this.state.categories.categories[2].name
                      : "null"}
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="2"
                    value={this.state.newUser.new_categories[2]}
                    onChange={this.onChangeCategory}
                  >
                    <option>Choose...</option>
                    <option>
                      {this.state.categories
                        ? this.state.categories.categories[2].categoryOptions[0]
                            .name
                        : "null"}
                    </option>
                    <option>
                      {this.state.categories
                        ? this.state.categories.categories[2].categoryOptions[1]
                            .name
                        : "null"}
                    </option>
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
              <Link
                to="/profile"
                style={{ color: "white" }}
                onClick={this.submit}
                role="button"
                className="btn btn-dark btn-md"
              >
                Submit
              </Link>
              &nbsp;{" "}
              <Link
                to="/"
                style={{ color: "white" }}
                role="button"
                className="btn btn-dark btn-md"
              >
                Cancel
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Register;
