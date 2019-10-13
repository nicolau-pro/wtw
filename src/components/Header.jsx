import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="Logo">
          <img src="media/WTW_Logo.svg" alt="Logo"></img>
        </div>

        <div className="Login">
          <div>
            <i className="im im-user-male"></i>
            <span>Aldyn Betez</span>
          </div>
          <i className="im im-menu-dot-v"></i>
        </div>
      </header>
    );
  }
}

export default Header;
