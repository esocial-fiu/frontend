import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Carousel from "react-bootstrap/Carousel";
import "./../style.css";
import i3 from "../../images/item3.jpg";
import i2 from "../../images/item2.jpg";
import i6 from "../../images/item6.jpg";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container text-center">
          <Jumbotron
            style={{
              background: "rgba(0,0,0,0.0001)",
              justifyContent: "center"
            }}
          >
            <h1 className="display-4">
              <strong>Welcome to eSocial!</strong>
            </h1>
            <p className="lead">
              The simple application that allows you both attend and create
              events that interests you.
            </p>
            <p>A place where strangers with common interests can meet</p>
            <Carousel>
              <Carousel.Item style={{ height: "300px" }}>
                <img className="d-block w-100" src={i3} alt="First slide" />
                <Carousel.Caption>
                  <h3>Discover a new location</h3>
                  <p>Get to know where all the social activities are.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "300px" }}>
                <img className="d-block w-100" src={i2} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Meet new people</h3>
                  <p>
                    Make friends for life with strangers you would never think
                    to meet.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "300px" }}>
                <img className="d-block w-100" src={i6} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Make new memories</h3>
                  <p>Participate in fun activities that interests you.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br />
            <Link to="/about" className="btn btn-info btn-lg" role="button">
              Learn more
            </Link>
          </Jumbotron>
          <div className="container text-center">
            <div
              className="btn-group btn-group-lg "
              role="group"
              aria-label="Basic example"
            >
              <Link
                to="/register"
                className="btn btn-light"
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
                  <MaterialIcon icon="add_circle" size={25} />
                  &nbsp; Register
                </div>
              </Link>
              &emsp;
              <Link
                to="/login"
                className="btn btn-light"
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
                  <MaterialIcon icon="account_circle" size={25} />
                  &nbsp; Login
                </div>
              </Link>
            </div>
          </div>
          &nbsp;
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
