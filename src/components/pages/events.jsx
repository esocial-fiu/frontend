import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Events extends Component {
  state = {};
  render() {
    return (
      <div>
      <Card
        style={{
          width: "10%",
          marginTop: "30px"
        }}
      >
        <h1>Events</h1>
      </Card>
      <br>
      </br>
      
      <Card
          style={{
            width: "80%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
          <button> RSVP </button> 
          </Card.Body>
      </Card>
      <Card
          style={{
            width: "80%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
          <button> RSVP </button> 
          </Card.Body>
      </Card>
      <br>
      </br>
      <Card
          style={{
            width: "80%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
          <button> RSVP </button> 
          </Card.Body>
      </Card>
      </div>

    
    );
  }
}

export default Events;
