import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./variables.scss";
import "./styles.css";
import Navbar from "./components/navbar";
import { mockData } from "./components/datafile.js";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user1: mockData,
      user: [{ profpic: "prof.pic", name: "name", shortdesc: "short desc" }],
      button: ""
    };
  }

  profileItems() {
    return this.state.user1.map(items => {
      return (
        <div className="profile-items">
          <button className="item1">{items.image}</button>
          <div className="item2">{items.name}</div>
          <button className="item3">{items.description}</button>
          <button className="btn">Button</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <div className="nav-section-wrapper">
          <div className="top-elements">
            <div>
              <a>Logo</a>
            </div>
            <div className="username">
              <a className="user1">User name</a>
            </div>
          </div>
          <BrowserRouter>
            <div className="navbar">
              <Navbar />
            </div>
          </BrowserRouter>
        </div>
        <div className="profiles">
          {this.profileItems()}
          {this.profileItems()}
          {this.profileItems()}
          {this.profileItems()}
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
