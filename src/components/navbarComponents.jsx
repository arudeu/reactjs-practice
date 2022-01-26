import React, { Component } from "react";

class Nvb extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="nav-div" className="row-12-lg d-flex flex-row">
          <div className="col-2 text-center">
            <img
              className="p-2"
              id="logo-style"
              src="./img/logo.png"
              alt="aru_logo"
            />
          </div>

          <div id="nav-linksgrp" className="col-10">
            <a id="nav-links" href="#home">
              home
            </a>
            <a id="nav-links" href="#portfolio">
              portfolio
            </a>
            <a id="nav-links" href="#about">
              about
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nvb;
