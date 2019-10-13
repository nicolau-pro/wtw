import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class AsideLink extends Component {
  handleClick = event => {
    this.props.asideClick(event.target.id);
  };

  render() {
    var icon = "im im-" + this.props.icon;
    var textClass = this.props.text.length === 0 ? "d-none" : "";
    var currentClass = this.props.current ? "current" : "d-none";
    return (
      <li className={this.props.class}>
        <Link to={this.props.to}>
          <div>
            <i className={icon}></i>
          </div>
          <span className={textClass}>{this.props.text}</span>
          <div className={currentClass}></div>
          <div
            id={this.props.id}
            className="sensor"
            onClick={this.handleClick}
          ></div>
        </Link>
      </li>
    );
  }
}

export default AsideLink;
