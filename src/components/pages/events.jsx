import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  fetchEvents() {
    const em = this;
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `query {
        events{
          id,
          title,
          description,
          location,
          date,
          maxAmountOfPeople,
          createdBy{
            firstName,
            lastName
          }
          }
        }`
      }
    }).then(result => {
      em.setState({
        events: result.data.data
      });
    });
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
            id
          }
        }`
      }
    }).then(result => {
      vm.setState({
        user: result.data.data
      });
    });
  }

  rsvp(eventId) {
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `mutation {
          eventRSVP(
            userId: ${this.state.user.userLogin.id}, 
            eventId: ${eventId}
            ){
               location
             }
        }`
      }
    }).then(result => {
      console.log(result);
    });
  }

  componentDidMount() {
    this.fetchEvents();
    this.fetchUser();
  }

  render() {
    return (
      <Card style={{ background: "rgba(0,0,0,0.001)" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "50px" }}>Events</Card.Title>
          <Button variant="dark" type="submit">
            <Link
              to={{
                pathname: "/newEvent",
                state: {
                  log_email: this.props.location.state.log_email,
                  log_password: this.props.location.state.log_password,
                  log_id: this.props.location.state.log_id
                }
              }}
              style={{ color: "white" }}
            >
              Create Event
            </Link>
          </Button>
          &nbsp;
          <Button variant="dark" type="submit">
            <Link to="/newEvent" style={{ color: "white" }}>
              My Events
            </Link>
          </Button>
          &nbsp;
          <br />
          <div className="container">
            {this.state.events &&
              this.state.events.events.map((event, index) => (
                <Card
                  key={index}
                  style={{
                    width: "90%",
                    marginTop: "30px"
                  }}
                  className="text-center"
                  bg="light"
                  border="secondary"
                >
                  <Card.Body>
                    <Card.Title style={{ fontSize: "30px" }}>
                      {event.title}
                    </Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                    <br />
                    <Card.Subtitle>Location: {event.location}</Card.Subtitle>
                    <br />
                    <Card.Subtitle>
                      Max: {event.maxAmountOfPeople}
                    </Card.Subtitle>
                    <br />
                    <Card.Subtitle>
                      Hosted by:{" "}
                      <strong>
                        {event.createdBy.firstName} {event.createdBy.lastName}{" "}
                      </strong>
                    </Card.Subtitle>
                    <br />
                    <Button variant="dark" onClick={() => this.rsvp(event.id)}>
                      {" "}
                      RSVP{" "}
                    </Button>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Events;
