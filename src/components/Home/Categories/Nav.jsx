import React, { Component } from "react";
import NavItem from "./NavItem";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          {this.props.categories.map((category, index) => (
            <NavItem key={index} category={category}></NavItem>
          ))}

          <li className="add">
            <i className="im im-plus-circle"></i> Category
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
