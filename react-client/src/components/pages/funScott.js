import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';

class FunScott extends Component {

 nextPath(path) {
 	this.props.history.push(path);
 }

  render() {
    return (
    	<div>
    		<MediaQuery minDeviceWidth={900}>
	    		<div className='center'>
			    	<div className='welcome'>
			        	Hi, I'm fun Scott!
			        </div>
			        <div className='pic'>
						<img src="https://s3.amazonaws.com/scott-personal-website/fun_scott.jpg"/>
					</div>
					<br>
					</br>
					<div className='fun-intro'>
						Nice to meet you! Want to get to know me better? Here's some fun facts about me! 
					</div>
				    <br>
					</br>
					<div className='fp-width'>
				        <div className='pic'>
					    	<img src="https://s3.amazonaws.com/scott-personal-website/spurs_scott.jpg"/>
					 	</div>
					</div>
			        <div className='fun-description'>
			      		I love playing and watching <b>soccer</b>. My favorite team is <b>Tottenham Hotspur</b>, a soccer team in the English Premier League.
			        </div>
			        <br> 
			        </br>
				    <div className='fp-width'>
				    	<div className='pic'>
					   		<img src="https://s3.amazonaws.com/scott-personal-website/britishscott.jpg"/>
					    </div>
					</div>
			        <div className='fun-description'>
			      		I’m half <b>British</b> and have <b>dual citizenship</b>! My dad’s from England, and is a huge reason for my love of soccer (football) and Tottenham Hotspur.
			        </div>
			        <br> 
			        </br>
			        <div className='fp-width'>
				      	<div className='pic'>
					    	<img src="https://s3.amazonaws.com/scott-personal-website/scottanimals.jpg"/>
					    </div>
					</div>
			        <div className='fun-description'>
			      		I love animals, especially <b>cats</b> and <b>dogs</b>. My family has four cats, even though I'm allergic to them and have to take a bunch of allergy medication. I also volunteer at a couple of animal shelters!
			        </div>
			        <br> 
			        </br>
			        <div className='fp-width'>
			      		<div className='pic'>
				   			 <img src="https://s3.amazonaws.com/scott-personal-website/scott76.jpg"/>
				   		</div>
				  	</div>
			      <div className='fun-description'>
			      	I have a love/hate relationship with the video game <b>Overwatch</b>. 
			      </div>
			        <br> 
			   		</br>		        
			        <div className='email'>
			        	Wanna talk? You can find me at <b>scottbenson96@gmail.com</b> OR
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
			    	<div className='fun-welcome-small'>
			        	Hi, I'm fun Scott!
			        </div>
			        <div className='pic'>
						<img src="https://s3.amazonaws.com/scott-personal-website/fun_scott.jpg"/>
					</div>
					<br>
					</br>
					<div className='fun-intro-small'>
						Nice to meet you! Want to get to know me better? Here's some fun facts about me! 
					</div>
				    <br>
					</br>
					<div className='fp-width-small'>
				        <div className='pic'>
					    	<img src="https://s3.amazonaws.com/scott-personal-website/spurs_scott.jpg"/>
					 	</div>
					</div>
			        <div className='fun-description-small'>
			      		I love playing and watching <b>soccer</b>. My favorite team is <b>Tottenham Hotspur</b>, a soccer team in the English Premier League.
			        </div>
			        <br> 
			        </br>
				    <div className='fp-width-small'>
				    	<div className='pic'>
					   		<img src="https://s3.amazonaws.com/scott-personal-website/britishscott.jpg"/>
					    </div>
					</div>
			        <div className='fun-description-small'>
			      		I’m half <b>British</b> and have <b>dual citizenship</b>! My dad’s from England, and is a huge reason for my love of soccer (football) and Tottenham Hotspur.
			        </div>
			        <br> 
			        </br>
			        <div className='fp-width-small'>
				      	<div className='pic'>
					    	<img src="https://s3.amazonaws.com/scott-personal-website/scottanimals.jpg"/>
					    </div>
					</div>
			        <div className='fun-description-small'>
			      		I love animals, especially <b>cats</b> and <b>dogs</b>. My family has four cats, even though I'm allergic to them and have to take a bunch of allergy medication. I also volunteer at a couple of animal shelters!
			        </div>
			        <br> 
			        </br>
			        <div className='fp-width-small'>
			      		<div className='pic'>
				   			 <img src="https://s3.amazonaws.com/scott-personal-website/scott76.jpg"/>
				   		</div>
				  	</div>
			      <div className='fun-description-small'>
			      	I have a love/hate relationship with the video game <b>Overwatch</b>. 
			      </div>
			        <br> 
			   		</br>		        
			        <div className='email'>
			        	Wanna talk? You can find me at <b>scottbenson96@gmail.com</b> OR
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

export default FunScott;