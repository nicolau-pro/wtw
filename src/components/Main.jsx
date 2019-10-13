import React, { Component } from "react";
import Aside from "./Aside";
import Content from "./Content";
import AddCategory from "./AddCategory";
import { BrowserRouter as Router } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <main>
        <Router>
          <Aside links={this.props.links} asideClick={this.props.asideClick} />
          <Content
            clients={this.props.clients}
            handleAddCategoryClick={this.props.handleAddCategoryClick}
          />
          <AddCategory
            newCategory={this.props.newCategory}
            handleAddCategoryCancel={this.props.handleAddCategoryCancel}
            handleAddCategoryFill={this.props.handleAddCategoryFill}
            handleAddCategorySubmit={this.props.handleAddCategorySubmit}
          />
        </Router>
      </main>
    );
  }
}

export default Main;
