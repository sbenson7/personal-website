import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Footer extends Component {
  render() {
    return (
    	<div>
	        <MediaQuery minDeviceWidth={900}>
		       	<footer>
		        	<div>
		           		Copyright © 2018 Scott Benson. All Rights Reserved. 
		        	</div>
	        	</footer>
	        </MediaQuery>
	        <MediaQuery maxDeviceWidth={899}>
		       	<div className='footer-small'>
		        	<div>
		           		Copyright © 2018 Scott Benson. All Rights Reserved. 
		        	</div>
	        	</div>
	        </MediaQuery>
	    </div>
    )
  }
}

export default Footer;