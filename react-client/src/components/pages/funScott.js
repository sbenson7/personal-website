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
	       <div className='funheaders'>
	      	 I love playing and watching soccer. My favorite team is Tottenham Hotspur, a soccer team in the English Premier League.
	      </div>
	      <div className='funheaders'>
	      	I’m half British! My dad’s from England, and is a huge reason for my love of soccer and Tottenham Hotspur.
	      </div>
        </div>    
    )
  }
}

export default FunScott;