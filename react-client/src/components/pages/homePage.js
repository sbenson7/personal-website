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
	      <div className='workscott'>
	        <button  onClick={() => this.nextPath('/workscott')}>
	               Meet Work Scott!
	        </button> 
	      </div>
        </div>    
    )
  }
}

export default HomePage;