import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    links: [
      { to: "/", text: "home", icon: "home", current: true },
      { to: "/create", text: "create", icon: "folder-add" },
      { to: "/recent", text: "recent", icon: "clock" },
      { to: "/alerts", text: "alerts", icon: "warning" },
      { to: "/settings", text: "", icon: "gear", class: "settings" }
    ],

    clients: [
      {
        name: "Microsoft",
        logo: "media/Microsoft_Logo.svg"
      },
      {
        name: "Google",
        logo: "media/Google_Logo.svg",
        selected: true,
        categories: [
          {
            data: {
              name: "Search",
              description: "Search engine and more",
              owner: "Google INC",
              legal_entity: "Google Limited",
              b_u: "Speciality",
              team: "Team 1"
            },
            details:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            selected: true
          },
          {
            data: {
              name: "Android",
              description: "Mobile OS",
              owner: "Google INC",
              legal_entity: "Google Limited",
              BU: "Speciality",
              Team: "Team 2"
            },
            details:
              "Med ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          },
          {
            data: {
              name: "Pixel",
              description: "Phone",
              owner: "Google INC",
              legal_entity: "Google Limited",
              BU: "Speciality",
              Team: "Team 3"
            },
            details:
              "Ped ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          }
        ]
      },
      {
        name: "Amazon",
        logo: "media/Amazon_Logo.svg"
      }
    ]
  };

  componentDidMount() {
    console.log("Loaded");
  }

  asideClick = id => {
    var links = this.state.links;
    links.filter(obj => {
      return obj.current === true;
    })[0].current = false;
    links[id].current = true;
    this.setState({ links });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main
          links={this.state.links}
          clients={this.state.clients}
          asideClick={this.asideClick}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
