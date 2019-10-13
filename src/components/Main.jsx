import React, { Component } from "react";
import Aside from "./Aside";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <main>
        <Router>
          <Aside links={this.props.links} asideClick={this.props.asideClick} />
          <Content clients={this.props.clients} />
        </Router>
      </main>
    );
  }
}

export default Main;
