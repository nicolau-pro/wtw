import React, { Component } from "react";

class Display extends Component {
  state = {
    detailsVisible: false
  };

  handleClickDetails = () => {
    this.setState({ detailsVisible: !this.state.detailsVisible });
  };

  render() {
    const selectedIndex = this.props.categories.findIndex(obj => {
      return obj.selected === true;
    });

    const selectedCategory = this.props.categories[selectedIndex];

    return (
      <React.Fragment>
        <div className="col-lg-6">
          <div className="categoryCard">
            <div className="header">
              <h3>Category</h3>
              <div>
                <i
                  className={
                    this.state.detailsVisible ? "im im-data" : "im im-info"
                  }
                  clientindex={this.props.index}
                  categoryindex={selectedIndex}
                  onClick={this.handleClickDetails}
                ></i>
                <i className="im im-pencil"></i>
              </div>
            </div>
            <div className={this.state.detailsVisible ? "d-none" : "data"}>
              <ul>
                {Object.keys(selectedCategory.data).map((key, index) => (
                  <li key={index}>{key.replace(/_/g, " ")}</li>
                ))}
              </ul>
              <ul>
                {Object.values(selectedCategory.data).map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>

            <div className={this.state.detailsVisible ? "details" : "d-none"}>
              {selectedCategory.details}
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="task">
            <h3>Task 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </p>
            <div>
              <span>Draft</span>
              <i className="im im-arrow-right-circle"></i>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="addTask">
            <div>
              <i className="im im-plus"></i>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Display;
