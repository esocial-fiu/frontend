import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          style={{
            width: "40%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
            <h1> Login </h1>
            <input type="text" name="Email" placeholder="Email" />
            <br />
            <br />
            <input type="password" name="Password" placeholder="Password" />
            <br />
            <br />
            <button>
              {" "}
              <Link to="/profile" style={{ color: "black" }}>
                Login{" "}
              </Link>
            </button>{" "}
            <t /> <button>Forgot Password</button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
