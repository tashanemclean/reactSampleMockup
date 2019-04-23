import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-elements">
        <Link className="nav-links" to="nav1">
          nav button
        </Link>
        <Link className="nav-links" to="nav2">
          nav button
        </Link>
        <Link className="nav-links" to="nav3">
          nav button
        </Link>
        <Link className="nav-links" to="nav4">
          nav button
        </Link>
      </div>
    );
  }
}
