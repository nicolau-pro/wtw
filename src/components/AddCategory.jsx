import React, { Component } from "react";

class AddCategory extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddCategorySubmit();
    for (let input of document.getElementsByTagName("input")) input.value = "";
  };

  handleChange = event => {
    this.props.handleAddCategoryFill(event.target.id, event.target.value);
  };

  render() {
    var stage = {
      current: 0,
      total: 0,
      fields: []
    };

    var progress = [];

    if (this.props.newCategory.stage !== false) {
      stage = {
        current: this.props.newCategory.stage,
        total: this.props.newCategory.stages.length,
        fields: this.props.newCategory.stages[this.props.newCategory.stage]
          .fields
      };

      progress = this.props.newCategory.stages.map(({ section }) => section);
    }

    const addCategoryClass =
      this.props.newCategory.stage !== false ? "addCategory" : "d-none";
    return (
      <div className={addCategoryClass}>
        <div
          className="full"
          onClick={this.props.handleAddCategoryCancel}
        ></div>

        <section className="container col-lg-6">
          <div className="header">
            <h3>Create Category</h3>
            <i
              className="im im-x-mark"
              onClick={this.props.handleAddCategoryCancel}
            ></i>
          </div>

          <div className="progressBar">
            <ul>
              {progress.map((text, index) => (
                <li
                  key={index}
                  className={index === stage.current ? "current" : ""}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="fields">
              {Object.entries(stage.fields).map((entry, index) => (
                <div key={index} className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    {entry[0].replace(/_/g, " ")}
                  </label>
                  {entry[0] === "details" ? (
                    <textarea
                      onChange={this.handleChange}
                      type={entry[1]}
                      className="form-control"
                      id={entry[0]}
                      placeholder={"Enter " + entry[0].replace(/_/g, " ")}
                      defaultValue=""
                      rows="5"
                      required
                    />
                  ) : (
                    <input
                      onChange={this.handleChange}
                      type={entry[1]}
                      className="form-control"
                      id={entry[0]}
                      placeholder={"Enter " + entry[0].replace(/_/g, " ")}
                      defaultValue=""
                      required
                    />
                  )}
                </div>
              ))}
            </div>
            {stage.current < stage.total - 1 ? (
              <button type="submit" className="btn btn-primary">
                next
              </button>
            ) : (
              <button type="submit" className="btn btn-success">
                save
              </button>
            )}
          </form>
        </section>
      </div>
    );
  }
}

export default AddCategory;
