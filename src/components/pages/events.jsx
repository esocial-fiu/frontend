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
          }
        }`
      }
    }).then(result => {
      em.setState({
        events: result.data.data
      });
      console.log(result);
    });
  }

  componentDidMount() {
    this.fetchEvents();
  }
  render() {
    return (
      <Card style={{ background: "rgba(0,0,0,0.001)" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "50px" }}>Events</Card.Title>
          <Button variant="dark" type="submit">
            <Link to="/newEvent" style={{ color: "white" }}>
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
                    <Card.Subtitle>
                      {" "}
                      Loation:{""} {event.location}
                    </Card.Subtitle>
                    <br />
                    <Button variant="dark"> RSVP </Button>
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
