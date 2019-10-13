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
    ],

    newCategory: {
      stage: false,
      stages: [
        {
          section: "Client",
          fields: { name: "text", description: "text" }
        },
        {
          section: "legal",
          fields: { owner: "text", legal_entity: "text" }
        },
        {
          section: "assignment",
          fields: { b_u: "text", team: "number" }
        },
        {
          section: "details",
          fields: { details: "text" },
          details: true
        }
      ],
      form: {}
    }
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

  handleAddCategoryClick = () => {
    var newCategory = this.state.newCategory;
    newCategory.stage = 0;
    this.setState({ newCategory });
  };

  handleAddCategoryCancel = () => {
    var newCategory = this.state.newCategory;
    newCategory.stage = false;
    this.setState({ newCategory });
  };

  handleAddCategoryFill = (field, value) => {
    var newCategory = this.state.newCategory;
    newCategory.form[field] = value;
    this.setState(newCategory);
  };

  handleAddCategorySubmit = () => {
    var newCategory = this.state.newCategory;
    const totalStages = newCategory.stages.length;
    var clients = this.state.clients;
    var categories = clients[this.getSelectedClient()].categories;

    if (newCategory.stage < totalStages - 1) {
      newCategory.stage++;
    } else {
      const details = newCategory.form.details;
      delete newCategory.form.details;
      categories.push({
        data: newCategory.form,
        details
      });
      this.handleAddCategoryCancel();
    }
    this.setState(newCategory);
  };

  getSelectedClient = () => {
    const clients = this.state.clients;
    for (var i in clients) if (clients[i].selected) return i;
  };

  getSelectedCategory = c => {
    const categories = this.state.clients[this.getSelectedClient()].categories;
    for (var i in categories) if (categories[i].selected) return i;
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main
          links={this.state.links}
          clients={this.state.clients}
          asideClick={this.asideClick}
          newCategory={this.state.newCategory}
          handleAddCategoryClick={this.handleAddCategoryClick}
          handleAddCategoryCancel={this.handleAddCategoryCancel}
          handleAddCategoryFill={this.handleAddCategoryFill}
          handleAddCategorySubmit={this.handleAddCategorySubmit}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
