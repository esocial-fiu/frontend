import React, { Component } from "react";
import { Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      newEvent: {
        new_title: "",
        new_description: "",
        new_location: "",
        new_date: "",
        new_max: null,
        new_created: 1
      },
      message: ""
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(event) {
    var newEvent = this.state.newEvent;
    if (event.target.value === "5") {
      parseInt(event.target.value, 10);
    }
    newEvent[event.target.name] = event.target.value;
    this.setState({
      newEvent
    });
  }
  componentDidMount() {
    console.log(this.props.location.state.log_id);
  }

  submit() {
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `mutation {
          createEvent(
          title: "${this.state.newEvent.new_title}",
          description: "${this.state.newEvent.new_description}",
          location: "${this.state.newEvent.new_location}",
          date: "${this.state.newEvent.new_date}",
          createdBy: "${this.props.location.state.log_id}",
          maxAmountOfPeople: ${this.state.newEvent.new_max}
          ){
            title
          }
        }`
      }
    })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error.response);
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
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter a title"
                    name="new_title"
                    value={this.state.newEvent.new_title}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter location"
                    name="new_location"
                    value={this.state.newEvent.new_location}
                    onChange={this.onChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="formGridBirthday" as={Col}>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    placeholder="MM/DD/YYYY"
                    name="new_date"
                    value={this.state.newEvent.new_date}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGridPassword" as={Col}>
                  <Form.Label>Max capacity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Password"
                    name="new_max"
                    value={Number(this.state.newEvent.new_max)}
                    onChange={this.onChange}
                    as="select"
                  >
                    <option>Choose...</option>
                    <option type="number">5</option>
                    <option type="number">10</option>
                    <option type="number">15</option>
                    <option type="number">20</option>
                    <option type="number">25</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridLname">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Enter a description"
                    name="new_description"
                    value={this.state.newEvent.new_description}
                    onChange={this.onChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row />
              <Link
                to={{
                  pathname: "/profile",
                  state: {
                    log_email: this.props.location.state.log_email,
                    log_password: this.props.location.state.log_password
                  }
                }}
                onClick={this.submit}
                role="button"
                className="btn btn-outline-dark btn-md"
              >
                Submit
              </Link>
              &nbsp;{" "}
              <Link
                to={{
                  pathname: "/events",
                  state: {
                    log_email: this.props.location.state.log_email,
                    log_password: this.props.location.state.log_password,
                    log_id: this.props.location.state.log_id
                  }
                }}
                role="button"
                className="btn btn-outline-dark btn-md"
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

export default NewEvent;
