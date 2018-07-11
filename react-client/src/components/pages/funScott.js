import React, { Component } from 'react';

class FunScott extends Component {

 nextPath(path) {
 	this.props.history.push(path);
 }

  render() {
    return (
    	<div>
	      <div className='welcome'>
	        Hi, I'm fun Scott!
	      </div>
        </div>    
    )
  }
}

export default FunScott;