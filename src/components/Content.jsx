import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Recent from "./Pages/Recent";
import Alerts from "./Pages/Alerts";
import Settings from "./Pages/Settings";

class Content extends Component {
  render() {
    return (
      <section className="content">
        <Route
          exact
          path="/"
          render={() => <Home clients={this.props.clients} />}
        />
        <Route path="/create" render={props => <Create />} />
        <Route path="/recent" render={props => <Recent />} />
        <Route path="/alerts" render={props => <Alerts />} />
        <Route path="/settings" render={props => <Settings />} />
      </section>
    );
  }
}

export default Content;
