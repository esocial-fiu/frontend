import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import "./../style.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container text-center">
          <div
            className="jumbotron"
            style={{
              background: "rgba(0,0,0,0.0001)",
              justifyContent: "center"
            }}
          >
            <h1 className="display-4">Welcome, world!</h1>
            <p className="lead">
              This is a simple application that allows you both attend and
              create events that interests you.
            </p>

            <p>A place where strangers with common interests can meet</p>
            <Link
              to="/about"
              className="btn btn-outline-dark btn-lg"
              role="button"
            >
              Learn more
            </Link>
          </div>

          <div className="container text-center">
            <div
              className="btn-group btn-group-lg "
              role="group"
              aria-label="Basic example"
            >
              <Link
                to="/register"
                className="btn btn-dark"
                role="button"
                style={{ borderRadius: "30px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <MaterialIcon icon="add_circle" color="#fff" size={25} />
                  &nbsp; Register
                </div>
              </Link>
              &emsp;
              <Link
                to="/login"
                className="btn btn-dark"
                role="button"
                style={{ borderRadius: "30px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <MaterialIcon icon="account_circle" color="#fff" size={25} />
                  &nbsp; Login
                </div>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
