import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron" style={{ background: "rgba(0,0,0,0.0001)" }}>
          <h1 className="display-4">Welcome, world!</h1>
          <p className="lead">
            This is a simple application that allows you both attend and create
            events that interests you.
          </p>

          <p>A place where strangers with common interests can meet</p>
          <a className="btn btn-outline-light btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>

        <div className="container">
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-dark ">
              Register
            </button>
            &nbsp;
            <button type="button" className="btn btn-dark ">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
