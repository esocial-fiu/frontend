import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import {Link} from "react-router-dom";

class Events extends Component {
  constructor(props){
  super(props);
  this.state = {
    events: null
  }
}
  fetchEvents()
  {
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

  componentDidMount(){
    this.fetchEvents();
  }
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
      </Card> <button><Link to = "/newEvent">Create Event</Link></button>
      <br>
      </br>
      
      <Card
          style={{
            width: "80%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
            <h1>{this.state.events ? this.state.events.events[0].title: "null"}</h1>
            <p1>{this.state.events ? this.state.events.events[0].description: "null"}</p1>
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
