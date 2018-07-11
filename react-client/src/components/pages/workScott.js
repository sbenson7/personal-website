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
	      <div className='workheaders'>
	      	 Study Clash
	      </div>
	      <div className='workheaders'>
	      	 Langton Creative
	      </div> 
	      <div className='workheaders'>
	      	 Idea Kraft
	      </div>
	     <div className='workheaders'>
	      	 CipherHealth
	      </div> 
	      <div className='workheaders'>
	      	 School Work
	      </div>
        </div>    
    )
  }
}

export default WorkScott;