import React, { Component } from 'react';

class WorkScott extends Component {

 nextPath(path) {
 	this.props.history.push(path);
 }

  render() {
    return (
    	<div>
    		<div className='center'>
		      	<div className='work-welcome'>
		       		Hi, I'm work Scott!
		        </div>
		        <div className='pic'>
					<img src="https://s3.amazonaws.com/scott-personal-website/langtoncreativescott.jpg"/>
				</div>
			    <div className='work-description'>
			    	I worked at Langton Creative as a Design/Web Developer Intern from June to August 2017.
			    </div>
			    <br>
			    </br>
			     <div className='pic'>
					<img src="https://s3.amazonaws.com/scott-personal-website/graduation_scott.jpg"/>
				</div>
			    <div className='work-description'>
			    	I graduaded May 2018 from Binghamton University. I majored in Political Science and minored in graphic design.
			    </div>
		        <div className='workheaders'>
		      		Study Clash
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
        </div>    
    )
  }
}

export default WorkScott;