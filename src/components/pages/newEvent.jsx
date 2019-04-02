import React, { Component } from "react";
import { Col, Form, Card, Button } from "react-bootstrap";
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
        new_max: "",
        new_attendees: ["createdBy"]
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    var newEvent = this.state.newEvent;
    newEvent[event.target.name] = event.target.value;
    this.setState({
      newEvent
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
                    type="password"
                    placeholder="Password"
                    name="new_max"
                    value={this.state.newEvent.new_max}
                    onChange={this.onChange}
                    as="select"
                  >
                    <option>Choose...</option>
                    <option>Small (up to 5)</option>
                    <option>Medium (10-15)</option>
                    <option>Large (15 +)</option>
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
              <Button variant="dark" type="submit" onClick={this.submit}>
                <Link to="/profile" style={{ color: "white" }}>
                  Submit
                </Link>
              </Button>
              &nbsp;
              <Button variant="dark" type="submit">
                {" "}
                <Link to="/events" style={{ color: "white" }}>
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

export default NewEvent;
