import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark navbar-static-top">
        <div className="navbar brand">
          <MaterialIcon icon="supervised_user_circle" color="#fff" size={30} />
          <Link
            className="navbar-brand"
            to="/"
            style={{ marginLeft: "5px", fontSize: "30px" }}
          >
            eSocial
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav" />
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item active" style={{ fontSize: "17px" }}>
            <Link to="/" className="nav-link">
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" style={{ fontSize: "17px" }}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-link" style={{ fontSize: "17px" }}>
              Faq
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
// push

export default NavBar;
