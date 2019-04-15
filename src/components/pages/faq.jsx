import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Faq extends Component {
  render() {
    return (
      <div
        className="conatiner"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          style={{
            width: "80%",
            marginTop: "30px"
          }}
        >
          <Card.Header>FAQ</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                <cite>Question:</cite> Do I Have to attend an event that I
                create?{" "}
              </p>
              <footer className="blockquote-footer">
                <cite>Answer:</cite> No, you do not have to attend an event that
                you created
              </footer>
            </blockquote>
            <hr />
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                <cite>Question:</cite> Can I see who is attending an event?{" "}
              </p>
              <footer className="blockquote-footer">
                <cite>Answer:</cite> yes, you are able to see anyone who RSVP to
                any event
              </footer>
            </blockquote>
            <hr />
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                <cite>Question:</cite> Can I see who is attending an event?{" "}
              </p>
              <footer className="blockquote-footer">
                <cite>Answer:</cite> yes, you are able to see anyone who RSVP to
                any event
              </footer>
            </blockquote>
            <hr />
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                <cite>Question:</cite> Can I see who is attending an event?{" "}
              </p>
              <footer className="blockquote-footer">
                <cite>Answer:</cite> yes, you are able to see anyone who RSVP to
                any event
              </footer>
            </blockquote>
            <hr />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Faq;
