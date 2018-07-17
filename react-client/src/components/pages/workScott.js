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
			    	I cofounded Study Clash, an educational mobile and web application that gamifies studying. Study Clash converts notes into multiple-choice trivia games so that students can learn classroom material as they compete with their friends. In addition to conceiving the idea for Study Clash, I led the front-end development and design of the web application, built using Ruby on Rails. I also designed the game’s avatars and contributed to the iOS and Android apps using React Native. Study Clash won Binghamton University's Idea Pitch Competition and the Mason Emerging Innovators Award at Worcester Polytechnic Institute. It participated in the Cardozo Tech Startup Clinic and the Accelerate WPI program.
			    </div>
			    <br>
			    </br>
		        <div className='pic'>
					<img src="https://s3.amazonaws.com/scott-personal-website/langtoncreativescott.jpg"/>
				</div>
			    <div className='work-description'>
			    	I worked at Langton Creative, an award-winning design firm, as a Design/Web Developer Intern from June to August 2017. I helped design and create branding, packaging, and websites for clients. Among my projects was contributing to the MirrorLite website, which went on to win the 2018 American Web Design Award and 2018 Communicator Award.
			    </div>
			    <br>
			    </br>
			     <div className='pic'>
					<img src="https://s3.amazonaws.com/scott-personal-website/ideakraftscott.jpg"/>
				</div>
			    <div className='work-description'>
			    	I worked at Idea Kraft, a website development, packaging design, and digital marketing agency, as a Front-End Developer Intern from January 2017 to May 2017. I worked on web pages, landing pages and email templates for clients, using my skills in WordPress, Adobe Creative Suite and graphic design.
			    </div>
			     <br>
			    </br>
			    <div className='pic'>
					<img src="https://s3.amazonaws.com/scott-personal-website/cipherhealthscott.jpg"/>
				</div>
			    <div className='work-description'>
			    	I worked at CipherHealth, a health tech startup, as a Software Development Intern from June to August 2015. I worked with applications in Ruby on Rails and tested with RSpec and Cucumber. I wrote in Ruby, HAML, CSS, and SASS; used MongoDB for the database; and  cleaned up code with Rubocop.


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