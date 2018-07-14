import React, { Component } from 'react';

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
		    </div>
        </div>    
    )
  }
}

export default HomePage;