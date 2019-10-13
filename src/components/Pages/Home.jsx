import React, { Component } from "react";
import ListItem from "../Home/List/Item";
import ListPrev from "../Home/List/Prev";
import ListNext from "../Home/List/Next";
import Nav from "../Home/Categories/Nav";
import Display from "../Home/Categories/Display";

class Home extends Component {
  render() {
    const selectedIndex = this.props.clients.findIndex(obj => {
      return obj.selected === true;
    });

    const selectedClient = this.props.clients[selectedIndex];

    return (
      <React.Fragment>
        <div className="home container">
          <section>
            <h1>Clients</h1>
          </section>

          <section className="list">
            <ul>
              <ListPrev />
              {this.props.clients.map((client, index) => (
                <ListItem key={index} client={client}></ListItem>
              ))}
              <ListNext />
            </ul>
          </section>

          <section className="categories">
            <Nav
              categories={selectedClient.categories}
              handleAddCategoryClick={this.props.handleAddCategoryClick}
            />
          </section>

          <section className="display row">
            <Display
              categories={selectedClient.categories}
              index={selectedIndex}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
