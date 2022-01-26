import React, { Component } from "react";
class Banner extends Component {
  welcome_paragraph = {
    color: "#fff",
    fontSize: 20,
    textAlign: "justify",
    letterSpacing: -1
  };
  button_style = {
    backgroundColor: "#fff",
    border: "none",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 20,
    fontWeight: 900,
    letterSpacing: -1,
    transform: "translateY(-100px)",
    marginLeft: 5,
    marginRight: 5,
  };
  render() {
    return (
      <React.Fragment>
        <div className="row-12-md d-flex flex-row h-100">
          <div className="col-6 d-flex flex-wrap align-items-center">
            <h1 id="h1-banner">hello world!</h1>
            <p style={this.welcome_paragraph}>
              my name is aldous. i'm an information technology student in the
              philippines, testing the functions and features of reactjs. i really love programming uwu~.
            </p>
            <button style={this.button_style}>hire me</button>
            <button style={this.button_style}>profile</button>
          </div>
          <div className="col-6 d-flex flex-wrap align-items-center justify-content-center ">

            <img
              src="./img/profile_outline.png"
              alt="264448391_5058288020850974_5557356294650538103_n.jpg"
              id="profile-pic"
              className="img-fluid"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Banner;
