import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./nav.css";

class nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        navlist: [
          { to: '/', title: 'Home' },
          { to: '/join', title: 'Join' },
          { to: '/login', title: 'Login' },
        ],
      };
  }
  render() {
    return (
      <div>
        <div className="Navconatiner">
        {this.state.navlist.map((navlist, index) => (
          <div key={index}>
            <Link to={navlist.to}>
              <div className="NavItem">{navlist.title}</div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default nav;
