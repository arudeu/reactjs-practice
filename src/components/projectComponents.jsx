import React, { Component } from "react";
class Project extends Component {
    project_style = {
        backgroundColor: 'black',
        margin: 10,
        marginLeft: 5,
        marginRight: 5,
        width: 'auto',
        height: 250,
        color: 'white',
        padding: 20,
        listStyle: 'none',
        letterSpacing: -1,
        fontSize: 20,
    };
    h1_project = {
      letterSpacing: -3,
      fontWeight: 900
    }
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
      transform: "translateY(90px)",
      marginLeft: 5,
      marginRight: 5,
    };
  render() {
    return (
      <React.Fragment>
        <div className="row d-flex flex h-100">
            <div className="col border border-white" style={this.project_style}>
                <h1>project one</h1>
                <li>
                    this is a project
                </li>
                <button style={this.button_style}>view</button>
            </div>
            <div className="col border border-white" style={this.project_style}>
                <h1>project two</h1>
                <li>
                    this is a project
                </li>
                <button style={this.button_style}>view</button>
            </div>
            
        </div>
      </React.Fragment>
    );
  }
}
export default Project;
