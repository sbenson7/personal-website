import React, { Component } from 'react';

class WorkScott extends Component {

 nextPath(path) {
 	this.props.history.push(path);
 }

  render() {
    return (
    	<div>
	      <div className='welcome'>
	        Hi, I'm work Scott!
	      </div>
        </div>    
    )
  }
}

export default WorkScott;