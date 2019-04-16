import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

class MyEvents extends Component {
  state = {
    events: null
  };

  fetchMyEvents() {
    const myEvents = [];

    this.props.location.state.events.events.forEach(element => {
      element.attendees.forEach(attendee => {
        if (attendee.id === this.props.location.state.log_id) {
          myEvents.push(element);
        }
      });
    });

    this.setState({
      events: myEvents
    });
  }

  componentDidMount() {
    this.fetchMyEvents();
  }

  unRSVP(eventId) {
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `mutation {
          eventUnRSVP(
            userId: ${this.props.location.state.log_id}, 
            eventId: ${eventId}
            ){
               location
             }
        }`
      }
    });
  }

  render() {
    return (
      <div className="container">
        <br />
        <Link
          to={{
            pathname: "/events",
            state: {
              log_email: this.props.location.state.log_email,
              log_password: this.props.location.state.log_password,
              log_id: this.props.location.state.log_id,
              events: this.state.events
            }
          }}
          style={{ color: "white" }}
          role="button"
          className="btn btn-dark btn-md"
        >
          Events
        </Link>
        <br />
        {this.state.events &&
          this.state.events.map((event, index) => (
            <Card
              bg="light"
              key={index}
              style={{
                width: "90%",
                marginTop: "30px",
                borderRadius: "15px"
              }}
              className="text-center"
              border="light"
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "30px" }}>
                  {event.title}
                </Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <br />
                <Card.Subtitle>Location: {event.location}</Card.Subtitle>
                <br />
                <Card.Subtitle>Max: {event.maxAmountOfPeople}</Card.Subtitle>
                <br />
                <Card.Subtitle>
                  Hosted by:{" "}
                  <strong>
                    {event.createdBy.firstName} {event.createdBy.lastName}{" "}
                  </strong>
                </Card.Subtitle>
                <br />
                <Card.Subtitle>
                  Attending:{" "}
                  {event.attendees
                    ? event.attendees.map(
                        attendee =>
                          attendee.firstName + " " + attendee.lastName + ", "
                      )
                    : "null"}
                </Card.Subtitle>
                <br />

                <Link
                  to={{
                    pathname: "/profile",
                    state: {
                      log_email: this.props.location.state.log_email,
                      log_password: this.props.location.state.log_password,
                      log_id: this.props.location.state.log_id
                    }
                  }}
                  style={{ color: "white" }}
                  role="button"
                  className="btn btn-dark btn-md"
                  onClick={() => this.unRSVP(event.id)}
                >
                  unRSVP{" "}
                </Link>
              </Card.Body>
            </Card>
          ))}
      </div>
    );
  }
}

export default MyEvents;
