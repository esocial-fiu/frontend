import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null
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
      <div style={{ marginTop: "50px" }}>
        <Button variant="dark" type="submit">
          <Link to="/newEvent" style={{ color: "white" }}>
            Create Event
          </Link>
        </Button>
        <Card
          style={{
            width: "10%",
            marginTop: "30px"
          }}
        >
          <h1>Events</h1>
        </Card>
        <br />
        <div>
          {this.state.events &&
            this.state.events.events.map((event, index) => (
              <Card
                key={index}
                style={{
                  width: "80%",
                  marginTop: "30px"
                }}
              >
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
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
      </div>
    );
  }
}

export default Events;
