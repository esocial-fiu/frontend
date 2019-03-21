import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Events extends Component {
  state = {};
  render() {
    return (
      <Card
        style={{
          width: "80%",
          marginTop: "30px"
        }}
      >
        <h1>Events</h1>
      </Card>
    );
  }
}

export default Events;
