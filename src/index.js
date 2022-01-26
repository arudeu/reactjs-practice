import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css';
import Nvb from "./components/navbarComponents";
import Bnr from "./components/bannerComponents";
import Prj from "./components/projectComponents";

ReactDOM.render(<Nvb/>,document.getElementById("navbar"));
ReactDOM.render(<Bnr/>,document.getElementById("banner"));
ReactDOM.render(<Prj/>,document.getElementById("projectcontent"));