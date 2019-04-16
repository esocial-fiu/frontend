import React, { Component } from "react";
import { Card } from "react-bootstrap";
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
            id,
            firstName,
            lastName
          }
          attendees{
            id,
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
            role="button"
            className="btn btn-dark btn-md"
          >
            Create Event
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/myevents",
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
            My Events
          </Link>
          &nbsp;
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
          >
            My Profile
          </Link>
          &nbsp;
          <br />
          <div className="container">
            {this.state.events &&
              this.state.events.events.map((event, index) => (
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
                      style={{ color: "white" }}
                      role="button"
                      className="btn btn-secondary btn-md"
                      onClick={() => this.rsvp(event.id)}
                    >
                      RSVP{" "}
                    </Link>
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
