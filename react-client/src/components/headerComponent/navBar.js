import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';

class NavBar extends Component {
  render() {
    return (
      <header>
      	<MediaQuery minDeviceWidth={900}>
	        <ul id="headerButtons">
	          <li className="navButton"><Link to=""><FaHome/></Link></li>
	        </ul>
	    </MediaQuery>
	    <MediaQuery maxDeviceWidth={899}>
	        <ul id="headerButtons">
	          <li className="navButton-small"><Link to=""><FaHome/></Link></li>
	        </ul>
	    </MediaQuery>
      </header>
    )
  }
}

export default NavBar;
