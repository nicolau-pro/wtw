import React, { Component } from "react";

class NavItem extends Component {
  render() {
    const category = this.props.category;
    const className = this.props.category.selected ? "selected" : "";
    return <li className={className}>{category.data.name}</li>;
  }
}

export default NavItem;
