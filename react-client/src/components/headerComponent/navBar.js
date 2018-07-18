import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to=""><FaHome/></Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
