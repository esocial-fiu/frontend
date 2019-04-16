import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

class MyEvents extends Component {
  state = {
    events: null,
    hostedEvents: null
  };

  fetchMyEvents() {
    const attendingEvents = [];

    const hostingEvents = this.props.location.state.events.events.filter(
      event => event.createdBy.id === this.props.location.state.log_id
    );

    this.props.location.state.events.events.forEach(element => {
      element.attendees.forEach(attendee => {
        if (attendee.id === this.props.location.state.log_id) {
          attendingEvents.push(element);
        }
      });
    });

    this.setState({
      events: attendingEvents,
      hostedEvents: hostingEvents
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

  cancelEvent(eventId) {
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `mutation {
            cancelEvent( 
              id: ${eventId}
            ){
                location
            }
          }`
      }
    }).catch(error => {
      console.log(error.response);
    });
  }

  render() {
    return (
      <div className="container">
        &nbsp;
        <Card style={{ background: "rgba(0,0,0,0.001)" }} border="dark">
          <Card.Body>
            <Card.Title style={{ fontSize: "50px" }}>My Events</Card.Title>

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
              className="btn btn-dark btn-lg"
            >
              Events
            </Link>
            <br />
            <br />
            <h3>Events I'm Hosting:</h3>
            {this.state.hostedEvents &&
              this.state.hostedEvents.map((event, index) => (
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
                    <h4 className="text-left">
                      <Badge pill variant="success">
                        Hosting
                      </Badge>
                    </h4>

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
                    <Card.Subtitle>
                      Attending:{" "}
                      {event.attendees
                        ? event.attendees.map(
                            attendee =>
                              attendee.firstName +
                              " " +
                              attendee.lastName +
                              ", "
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
                      role="button"
                      className="btn btn-outline-danger btn-md"
                      onClick={() => this.cancelEvent(event.id)}
                    >
                      Cancel Event
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            <br />
            <hr />
            <br />
            <h3>Events I'm Attending:</h3>
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
                    <h4 className="text-left">
                      <Badge pill variant="info">
                        Attending
                      </Badge>
                    </h4>
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
                    <Card.Subtitle>
                      Attending:{" "}
                      {event.attendees
                        ? event.attendees.map(
                            attendee =>
                              attendee.firstName +
                              " " +
                              attendee.lastName +
                              ", "
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
                      role="button"
                      className="btn btn-outline-warning btn-md"
                      onClick={() => this.unRSVP(event.id)}
                    >
                      unRSVP{" "}
                    </Link>
                  </Card.Body>
                </Card>
              ))}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MyEvents;
