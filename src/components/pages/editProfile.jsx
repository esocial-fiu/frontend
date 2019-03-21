import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Axios from "axios";

class EditProfile extends Component {
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
          sex,
          categoryOptions {
            name
          }
          }
        }`
      }
    }).then(result => {
      vm.setState({
        user: result.data.data
      });
    });
  }

  componentDidMount() {
    this.fetchUser();
  }
  render() {
    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          style={{
            width: "80%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
            <Card.Title>Edit Profile</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              personal details
            </Card.Subtitle> */}
            <div>
              <form>
                <div className="form-group row">
                  <label
                    htmlFor="inputFirstName"
                    className="col-sm-2 col-form-label"
                  >
                    First Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                      value={
                        this.state.user ? this.state.user.me.firstName : "null"
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputLastName"
                    className="col-sm-2 col-form-label"
                  >
                    Last Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastName"
                      value={
                        this.state.user ? this.state.user.me.lastName : "null"
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      value={
                        this.state.user ? this.state.user.me.email : "null"
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputBirthday"
                    className="col-sm-2 col-form-label"
                  >
                    Birthday
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="birthday"
                      className="form-control"
                      id="inputBirthday"
                      value={
                        this.state.user ? this.state.user.me.birthday : "null"
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticSex"
                    className="col-sm-2 col-form-label"
                  >
                    Sex
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      id="staticSex"
                      value={this.state.user ? this.state.user.me.sex : "null"}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticCategories"
                    className="col-sm-2 col-form-label"
                  >
                    Category Options
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      id="staticCategories"
                      value={
                        this.state.user
                          ? this.state.user.me.categoryOptions
                          : "null"
                      }
                    />
                  </div>
                </div>
              </form>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EditProfile;
