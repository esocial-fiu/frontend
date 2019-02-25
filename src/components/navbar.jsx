import React, { Component } from "react";
import MaterialIcon from "material-icons-react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark navbar-static-top">
        <MaterialIcon icon="supervised_user_circle" color="#fff" size={30} />

        <a
          className="navbar-brand"
          href="#"
          style={{ marginLeft: "5px", fontSize: "30px" }}
        >
          eSocial
        </a>

        <div className="collapse navbar-collapse" id="navbarNav" />
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
