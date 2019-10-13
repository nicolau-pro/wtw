import React, { Component } from "react";
import AsideLink from "./AsideLink";

class Aside extends Component {
  render() {
    return (
      <aside>
        <nav>
          <ul>
            {this.props.links.map((link, index) => (
              <AsideLink
                key={index}
                id={index}
                to={link.to}
                text={link.text}
                icon={link.icon}
                class={link.class ? link.class : undefined}
                current={link.current}
                asideClick={this.props.asideClick}
              ></AsideLink>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Aside;
