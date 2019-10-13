import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const client = this.props.client;
    const className =
      "clientListItem" + (client.selected ? " selected" : " d-none d-lg-block");
    return (
      <li className={className}>
        <img src={client.logo} alt={client.name} />
        <p>{client.name}</p>
      </li>
    );
  }
}

export default ListItem;
