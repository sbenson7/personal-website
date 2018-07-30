import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';

class WorkScott extends Component {

 nextPath(path) {
 	this.props.history.push(path);
 }

  render() {
  	var studyClashLink = <a href="https://www.studyclash.com" target="_blank">Study Clash</a>
  	var langtonCreativeLink = <a href="http://www.langtoncreative.com" target="_blank">Langton Creative</a>
  	var ideaKraftLink = <a href="http://www.idea-kraft.com" target="_blank">Idea Kraft</a>
  	var cipherHealthLink = <a href="https://www.cipherhealth.com" target="_blank">CipherHealth</a>
  	var resumeLink = <a href="https://s3.amazonaws.com/scott-personal-website/Scott_Benson_Resume.pdf" target="_blank">here!</a>

    return (
    	<div>
    		<MediaQuery minDeviceWidth={900}>
	    		<div className='center'>
			      	<div className='work-welcome'>
			       		Hi, I'm work Scott!
			        </div>
			        <div className='pic'>
						<img src="https://s3.amazonaws.com/scott-personal-website/work_scott.jpg"/>
					</div>
					<br>
					</br>
					<div className='work-intro'>
						I love to code and design. Here are some places I've worked. Don't worry, I can be just as fun as Fun Scott!
				    </div>
				    <br>
					</br>
					<div className='wp-width'>
			       		<div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/studyclashscott.jpg"/>
						</div>
					</div>
				    <div className='work-description'>
				    	I cofounded { studyClashLink }, an educational mobile and web application that gamifies studying. Study Clash converts notes into multiple-choice trivia games so that students can learn classroom material as they compete with their friends. In addition to conceiving the idea for Study Clash, I led the front-end development and design of the web application, built using Ruby on Rails. I also designed the game’s avatars and contributed to the iOS and Android apps using React Native. Study Clash won Binghamton University's Idea Pitch Competition and the Mason Emerging Innovators Award at Worcester Polytechnic Institute. It participated in the Cardozo Tech Startup Clinic and the Accelerate WPI program.
				    </div>
				    <br>
				    </br>
				    <div className='wp-width'>
				        <div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/langtoncreativescott.jpg"/>
						</div>
					</div>
				    <div className='work-description'>
				    	I worked at { langtonCreativeLink }, an award-winning design firm, as a <b>Design/Web Developer Intern</b> from June to August 2017. I helped design and create branding, packaging, and websites for clients. Among my projects was contributing to the MirrorLite website, which went on to win the 2018 American Web Design Award and 2018 Communicator Award.
				    </div>
				    <br>
				    </br>
				    <div className='wp-width'>
					    <div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/ideakraftscott.jpg"/>
						</div>
					</div>
				    <div className='work-description'>
				    	I worked at { ideaKraftLink }, a website development, packaging design, and digital marketing agency, as a <b>Front-End Developer Intern</b> from January 2017 to May 2017. I worked on web pages, landing pages and email templates for clients, using my skills in WordPress, Adobe Creative Suite and graphic design.
				    </div>
				     <br>
				    </br>
				    <div className='wp-width'>
					    <div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/cipherhealthscott.jpg"/>
						</div>
					</div>
				    <div className='work-description'>
				    	I worked at { cipherHealthLink }, a health tech startup, as a <b>Software Development Intern</b> from June to August 2015. I worked with applications in Ruby on Rails and tested with RSpec and Cucumber. I wrote in Ruby, HAML, CSS, and SASS; used MongoDB for the database; and cleaned up code with Rubocop.
				    </div>
				    <br>
				    </br>
				    <div className='wp-width'>
					    <div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/graduation_scott.jpg"/>
						</div>
					</div>
				    <div className='work-description'>
				    	I graduated in May 2018 from <b>Binghamton University</b>, where I majored in Political Science and minored in graphic design. While I'm still interested in Political Science, my graphic design courses seem more relevant for my current career path. {<Link to="/schoolwork">Here's some work I did in my classes!</Link>}
				    </div>
				    <br>
				    </br>
				    <div className='wp-width'>
					    <div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/winkingscott.jpg"/>
						</div>
					</div>
				    <div className='work-description'>
				    	Want to see a boring version of this page? Check out my <b> resume </b> { resumeLink }
				    </div>
				    <br> 
			   		</br>		        
			        <div className='w-email'>
			        	Want to contact me? You can find me at <b>scottbenson96@gmail.com</b> OR
			        </div>
			        <br> 
			   		</br>
			      <div className="socButton"><a href="https://www.instagram.com/scott_benson_/" target="_blank"><FaInstagram/></a></div>
			   	  <div className="socButton"><a href="https://twitter.com/scott_benson_" target="_blank"><FaTwitter/></a></div>
			   	  <div className="socButton"><a href="https://www.linkedin.com/in/scott-benson1/" target="_blank"><FaLinkedIn/></a></div>
			   	  <div className="socButton"><a href="https://github.com/sbenson7" target="_blank"><FaGithub/></a></div>
				</div>
			</MediaQuery>
			<MediaQuery maxDeviceWidth={899}>
	    		<div className='center'>
			      	<div className='work-welcome'>
			       		Hi, I'm work Scott!
			        </div>
			        <div className='pic'>
						<img src="https://s3.amazonaws.com/scott-personal-website/work_scott.jpg"/>
					</div>
					<br>
					</br>
					<div className='work-intro-small'>
						I love to code and design. Here are some places I've worked. Don't worry, I can be just as fun as Fun Scott!
				    </div>
				    <br>
					</br>
					<div className='wp-width-small'>
			       		<div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/studyclashscott.jpg"/>
						</div>
					</div>
				    <div className='work-description-small'>
				    	I cofounded { studyClashLink }, an educational mobile and web application that gamifies studying. Study Clash converts notes into multiple-choice trivia games so that students can learn classroom material as they compete with their friends. In addition to conceiving the idea for Study Clash, I led the front-end development and design of the web application, built using Ruby on Rails. I also designed the game’s avatars and contributed to the iOS and Android apps using React Native. Study Clash won Binghamton University's Idea Pitch Competition and the Mason Emerging Innovators Award at Worcester Polytechnic Institute. It participated in the Cardozo Tech Startup Clinic and the Accelerate WPI program.
				    </div>
				    <br>
				    </br>
				    <div className='wp-width-small'>
				        <div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/langtoncreativescott.jpg"/>
						</div>
					</div>
				    <div className='work-description-small'>
				    	I worked at { langtonCreativeLink }, an award-winning design firm, as a <b>Design/Web Developer Intern</b> from June to August 2017. I helped design and create branding, packaging, and websites for clients. Among my projects was contributing to the MirrorLite website, which went on to win the 2018 American Web Design Award and 2018 Communicator Award.
				    </div>
				    <br>
				    </br>
				    <div className='wp-width-small'>
					    <div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/ideakraftscott.jpg"/>
						</div>
					</div>
				    <div className='work-description-small'>
				    	I worked at { ideaKraftLink }, a website development, packaging design, and digital marketing agency, as a <b>Front-End Developer Intern</b> from January 2017 to May 2017. I worked on web pages, landing pages and email templates for clients, using my skills in WordPress, Adobe Creative Suite and graphic design.
				    </div>
				     <br>
				    </br>
				    <div className='wp-width-small'>
					    <div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/cipherhealthscott.jpg"/>
						</div>
					</div>
				    <div className='work-description-small'>
				    	I worked at { cipherHealthLink }, a health tech startup, as a <b>Software Development Intern</b> from June to August 2015. I worked with applications in Ruby on Rails and tested with RSpec and Cucumber. I wrote in Ruby, HAML, CSS, and SASS; used MongoDB for the database; and cleaned up code with Rubocop.
				    </div>
				    <br>
				    </br>
				    <div className='wp-width-small'>
					    <div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/graduation_scott.jpg"/>
						</div>
					</div>
				    <div className='work-description-small'>
				    	I graduated in May 2018 from <b>Binghamton University</b>, where I majored in Political Science and minored in graphic design. While I'm still interested in Political Science, my graphic design courses seem more relevant for my current career path. {<Link to="/schoolwork">Here's some work I did in my classes!</Link>}
				    </div>
				    <br>
				    </br>
				    <div className='wp-width-small'>
					    <div className='pic'>
							<img src="https://s3.amazonaws.com/scott-personal-website/winkingscott.jpg"/>
						</div>
					</div>
				    <div className='work-description-small'>
				    	Want to see a boring version of this page? Check out my <b> resume </b> { resumeLink }
				    </div>
				    <br> 
			   		</br>		        
			        <div className='w-email-small'>
			        	Want to contact me? You can find me at <b>scottbenson96@gmail.com</b> OR
			        </div>
			        <br> 
			   		</br>
			      <div className="socButton"><a href="https://www.instagram.com/scott_benson_/" target="_blank"><FaInstagram/></a></div>
			   	  <div className="socButton"><a href="https://twitter.com/scott_benson_" target="_blank"><FaTwitter/></a></div>
			   	  <div className="socButton"><a href="https://www.linkedin.com/in/scott-benson1/" target="_blank"><FaLinkedIn/></a></div>
			   	  <div className="socButton"><a href="https://github.com/sbenson7" target="_blank"><FaGithub/></a></div>
				</div>
			</MediaQuery>
        </div>    
    )
  }
}

export default WorkScott;