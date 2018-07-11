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
	      <div className='funscott'>
	        <button className="bttn" onClick={() => this.nextPath('/funscott')}>
	            Meet Fun Scott!
	        </button>
	       </div>   
	      <div className='workscott'>
	        <button className="bttn" onClick={() => this.nextPath('/workscott')}>
	            Meet Work Scott!
	        </button> 
	      </div>
        </div>    
    )
  }
}

export default HomePage;