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
					<img src="https://s3.amazonaws.com/scott-personal-website/studyclashscott.jpg"/>
				</div>
			    <div className='work-description'>
			    	I cofounded Study Clash, an educational website and app which converts notes into multiple-choice trivia games so students can learn classroom material as they compete with their friends.
			    </div>
			    <br>
			    </br>
		        <div className='pic'>
					<img src="https://s3.amazonaws.com/scott-personal-website/langtoncreativescott.jpg"/>
				</div>
			    <div className='work-description'>
			    	I worked at Langton Creative as a Design/Web Developer Intern from June to August 2017.
			    </div>
			    <br>
			    </br>
			     <div className='pic'>
					<img src="https://s3.amazonaws.com/scott-personal-website/ideakraftscott.jpg"/>
				</div>
			    <div className='work-description'>
			    	I worked at Idea Kraft as a Front-End Developer Intern from January 2017 to May 2017.
			    </div>
			     <br>
			    </br>
			    <div className='pic'>
					<img src="https://s3.amazonaws.com/scott-personal-website/cipherhealthscott.jpg"/>
				</div>
			    <div className='work-description'>
			    	I worked at CipherHealth as a Software Development Intern from June to August 2015.
			    </div>
			    <br>
			    </br>
			     <div className='pic'>
					<img src="https://s3.amazonaws.com/scott-personal-website/graduation_scott.jpg"/>
				</div>
			    <div className='work-description'>
			    	I graduaded in May 2018 from Binghamton University, where I majored in Political Science and minored in graphic design. While I'm still interested in Political Science, my graphic design courses seem more relevant for my current career path. Here's some work I did in my classes! 
			    </div>
			    <br>
			    </br>
			    <div className='pic'>
					<img src="https://s3.amazonaws.com/scott-personal-website/winkingscott.jpg"/>
				</div>
			    <div className='work-description'>
			    	Want to see basically just a boring version of this page? Check out my resume here!
			    </div>
			</div>
        </div>    
    )
  }
}

export default WorkScott;