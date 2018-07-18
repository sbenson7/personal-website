import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';

var buttonStyle = {
  margin: '10px 10px 10px 0'
}

class HomePage extends Component {

 nextPath(path) {
 	this.props.history.push(path)
 }

  render() {
    return (
    	<div>
	        <div className='welcome'>
	        	Hi, I'm Scott!
	        </div>
	        <div className='center'>
		    	<div className='fpic'>
		      		<img src="https://s3.amazonaws.com/scott-personal-website/fun_and_work_scott.jpg"/>
		        </div>
		    	<br> 
		   		</br>
		        <div className='funscott'>
		        	<button className="fbttn" onClick={() => this.nextPath('/funscott')}>
		            	Meet Fun Scott!
		        	</button>
		        </div>   
		        <div className='workscott'>
		        	<button className="wbttn" onClick={() => this.nextPath('/workscott')}>
		           		Meet Work Scott!
		        	</button> 
		        </div>
		    	<br> 
		   		</br>		        
		        <div className='email'>
		        	Wanna talk? You can find me at <b>scottbenson96@gmail.com</b> OR
		        </div>
		        <br> 
		   		</br>
		   	<div className="socButton"><a href="https://www.instagram.com/scott_benson_/" target="_blank"><FaInstagram/></a></div>
		   	<div className="socButton"><a href="https://twitter.com/scott_benson_" target="_blank"><FaTwitter/></a></div>
		   	<div className="socButton"><a href="https://www.linkedin.com/in/scott-benson1/" target="_blank"><FaLinkedIn/></a></div>
		    </div>
        </div>    
    )
  }
}

export default HomePage;