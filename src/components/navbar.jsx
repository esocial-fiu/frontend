import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";
import Axios from "axios";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  fetchUser() {
    const vm = this;
    Axios({
      url: "http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql",
      method: "post",
      data: {
        query: `query {
    me{
      id,
      firstName,
      lastName,
      email,
      birthday,
      sex
      }
    }`
      }
    }).then(result => {
      vm.setState({
        user: result.data.data
      });
      console.log(result);
      console.log(vm.state.user.me.firstName);
    });
  }

  componentDidMount() {
    this.fetchUser();
  }

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
          {/* <li className="nav-item">
            <Link to="/faq" className="nav-link" style={{ fontSize: "17px" }}>
              {this.state.user ? this.state.user.me.firstName : "null"}
            </Link>
          </li> */}
        </ul>
      </nav>
    );
  }
}
// push

export default NavBar;
