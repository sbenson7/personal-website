import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import ReactPlayer from 'react-player'
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';

var buttonStyle = {
  margin: '10px 10px 10px 0'
}

class Schoolwork extends Component {

  state = {
    open0: false,
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
  };


 nextPath(path) {
 	this.props.history.push(path)
 }

 
  onOpenModal(openVar) {
    this.setState({ ['open' + openVar]: true });
  };
 
  onCloseModal(openVar) {
    this.setState({ ['open' + openVar]: false });
  };

  render() {
    return (
    	<div>
    		<MediaQuery minDeviceWidth={900}>
		        <div className='work-welcome'>
		        	Schoolwork
		        </div>	
		        <div className='center'>
		         	<div className='work-intro'>
						Click on a square to view the assignment! 
					</div>
		        	<div className='schoolwork-box'>
				    	<div className='s-pic'>
				    	<button className="sbttn" onClick={() => this.onOpenModal('0')}><img src="https://s3.amazonaws.com/scott-personal-website/Canvas.png"/></button>
					        <Modal open={this.state.open0} onClose={() => this.onCloseModal('0')} center>
					        <div className='school-modal'>
					        	<div className='center'>						            
						    		<div className='pic'>
										<ReactPlayer url='https://s3.amazonaws.com/scott-personal-website/CanvasLogo.mp4' playing loop />
									</div>
								    <div className='school-description'>
								    	This an animation of a logo for my <b>Graphic Design Software II</b> class. It was for the hypothetical app <b>Canvas</b>, which makes art come alive with AR.
								    </div>
								</div>
					        </div>
					        </Modal>				        
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('1')}><img src="https://s3.amazonaws.com/scott-personal-website/BensonWinTheDaySmall.jpg"/></button>
					        <Modal open={this.state.open1} onClose={() => this.onCloseModal('1')} center>
					        	<div className='center'>					           
						           	<div className='pic'>
										<img src="https://s3.amazonaws.com/scott-personal-website/BensonWinTheDay.jpg"/>
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe Photoshop for my <b>Introduction to Graphic Design Software class</b>. We were instructed to put a quote into a photo we had taken.
									</div>
								</div>
					        </Modal>				        
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('2')}><img src="https://s3.amazonaws.com/scott-personal-website/WalkingDeadPattern.png"/></button>
					        <Modal open={this.state.open2} onClose={() => this.onCloseModal('2')} center>
					        	<div className='center'>						            
						           	<div className='pic'>
										<img src="https://s3.amazonaws.com/scott-personal-website/WalkingDeadPatternLarge.png"/>
									</div>
									<div className='school-description'>
									    For this assignment for my <b>Introduction to Graphic Design Software class</b>, we had to create a pattern based off of objects from a movie, tv show, or book, using Adobe Illustrator. I chose the <b>Walking Dead</b> (though I don't watch the show anymore).
									</div>
								</div>
					        </Modal>				        
				        </div>
				   		<div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('3')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial1.png"/></button>
					        <Modal open={this.state.open3} onClose={() => this.onCloseModal('3')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<ReactPlayer url='https://s3.amazonaws.com/scott-personal-website/ScottBenson_T1_1.mp4' playing loop />
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe After Effects for my <b>Graphic Design Software II</b> class.
									</div>
								</div>
					        </Modal>				        
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('4')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial2.png"/></button>
					        <Modal open={this.state.open4} onClose={() => this.onCloseModal('4')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<ReactPlayer url='https://s3.amazonaws.com/scott-personal-website/ScottBenson_T1_2.mp4' playing loop />
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe After Effects for my <b>Graphic Design Software II</b> class.
									</div>
								</div>
					        </Modal>
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('5')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial3.png"/></button>
					        <Modal open={this.state.open5} onClose={() => this.onCloseModal('5')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<ReactPlayer url='https://s3.amazonaws.com/scott-personal-website/Tutorial3.mp4' playing loop />
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe After Effects for my <b>Graphic Design Software II</b> class.
									</div>
								</div>
					        </Modal>
				      	</div>
				      	<div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('6')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial4.png"/></button>
					        <Modal open={this.state.open6} onClose={() => this.onCloseModal('6')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<ReactPlayer url='https://s3.amazonaws.com/scott-personal-website/ScottBenson_T2.mp4' playing loop />
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe After Effects for my <b>Graphic Design Software II</b> class.
									</div>
								</div>
					        </Modal>
				      	</div>
				      	<div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('7')}><img src="https://s3.amazonaws.com/scott-personal-website/Dog.png"/></button>
					        <Modal open={this.state.open7} onClose={() => this.onCloseModal('7')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<img src="https://s3.amazonaws.com/scott-personal-website/Dog.png"/>
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe Illustrator for my <b>Introduction to Graphic Design Software class</b>. 
									</div>
								</div>
					        </Modal>
				      	</div>
				      	<div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('8')}><img src="https://s3.amazonaws.com/scott-personal-website/Soccersmall.jpg"/></button>
					        <Modal open={this.state.open8} onClose={() => this.onCloseModal('8')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<img src="https://s3.amazonaws.com/scott-personal-website/Soccersmall.jpg"/>
									</div>
									<div className='school-description'>
									    In this assignment for my <b>Introduction to Graphic Design Software class</b> we had to use Adobe Illustrator to create symbols representing a hobby of ours.
									</div>
								</div>
					        </Modal>
				      	</div>
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
		        <div className='work-welcome'>
		        	Schoolwork
		        </div>
		        <div className='center'>
		        	<div className='work-intro-small'>
						Tap on a square to view the assignment! 
					</div>
		        	<div className='schoolwork-box-small'>
				    	<div className='s-pic'>
				    	<button className="sbttn" onClick={() => this.onOpenModal('0')}><img src="https://s3.amazonaws.com/scott-personal-website/Canvas.png"/></button>
					        <Modal open={this.state.open0} onClose={() => this.onCloseModal('0')} center>
					        <div className='school-modal'>
					        	<div className='center'>						            
						    		<div className='pic'>
										<ReactPlayer url='https://s3.amazonaws.com/scott-personal-website/CanvasLogo.mp4' playing loop />
									</div>
								    <div className='school-description'>
								    	This an animation of a logo for my <b>Graphic Design Software II</b> class. It was for the hypothetical app <b>Canvas</b>, which makes art come alive with AR.
								    </div>
								</div>
					        </div>
					        </Modal>				        
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('1')}><img src="https://s3.amazonaws.com/scott-personal-website/BensonWinTheDaySmall.jpg"/></button>
					        <Modal open={this.state.open1} onClose={() => this.onCloseModal('1')} center>
					        	<div className='center'>					           
						           	<div className='pic'>
										<img src="https://s3.amazonaws.com/scott-personal-website/BensonWinTheDay.jpg"/>
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe Photoshop for my <b>Introduction to Graphic Design Software class</b>. We were instructed to put a quote into a photo we had taken.
									</div>
								</div>
					        </Modal>				        
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('2')}><img src="https://s3.amazonaws.com/scott-personal-website/WalkingDeadPattern.png"/></button>
					        <Modal open={this.state.open2} onClose={() => this.onCloseModal('2')} center>
					        	<div className='center'>						            
						           	<div className='pic'>
										<img src="https://s3.amazonaws.com/scott-personal-website/WalkingDeadPatternLarge.png"/>
									</div>
									<div className='school-description'>
									    For this assignment for my <b>Introduction to Graphic Design Software class</b>, we had to create a pattern based off of objects from a movie, tv show, or book, using Adobe Illustrator. I chose the <b>Walking Dead</b> (though I don't watch the show anymore).
									</div>
								</div>
					        </Modal>				        
				        </div>
				   		<div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('3')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial1.png"/></button>
					        <Modal open={this.state.open3} onClose={() => this.onCloseModal('3')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<ReactPlayer url='https://s3.amazonaws.com/scott-personal-website/ScottBenson_T1_1.mp4' playing loop />
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe After Effects for my <b>Graphic Design Software II</b> class.
									</div>
								</div>
					        </Modal>				        
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('4')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial2.png"/></button>
					        <Modal open={this.state.open4} onClose={() => this.onCloseModal('4')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<ReactPlayer url='https://s3.amazonaws.com/scott-personal-website/ScottBenson_T1_2.mp4' playing loop />
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe After Effects for my <b>Graphic Design Software II</b> class.
									</div>
								</div>
					        </Modal>
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('5')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial3.png"/></button>
					        <Modal open={this.state.open5} onClose={() => this.onCloseModal('5')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<ReactPlayer url='https://s3.amazonaws.com/scott-personal-website/Tutorial3.mp4' playing loop />
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe After Effects for my <b>Graphic Design Software II</b> class.
									</div>
								</div>
					        </Modal>
				      	</div>
				      	<div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('6')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial4.png"/></button>
					        <Modal open={this.state.open6} onClose={() => this.onCloseModal('6')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<ReactPlayer url='https://s3.amazonaws.com/scott-personal-website/ScottBenson_T2.mp4' playing loop />
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe After Effects for my <b>Graphic Design Software II</b> class.
									</div>
								</div>
					        </Modal>
				      	</div>
				      	<div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('7')}><img src="https://s3.amazonaws.com/scott-personal-website/Dog.png"/></button>
					        <Modal open={this.state.open7} onClose={() => this.onCloseModal('7')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<img src="https://s3.amazonaws.com/scott-personal-website/Dog.png"/>
									</div>
									<div className='school-description'>
									    This was one of my first experiences using Adobe Illustrator for my <b>Introduction to Graphic Design Software class</b>. 
									</div>
								</div>
					        </Modal>
				      	</div>
				      	<div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('8')}><img src="https://s3.amazonaws.com/scott-personal-website/Soccersmall.jpg"/></button>
					        <Modal open={this.state.open8} onClose={() => this.onCloseModal('8')} center>
					        	<div className='center'>
						           	<div className='pic'>
										<img src="https://s3.amazonaws.com/scott-personal-website/Soccersmall.jpg"/>
									</div>
									<div className='school-description'>
									    In this assignment for my <b>Introduction to Graphic Design Software class</b> we had to use Adobe Illustrator to create symbols representing a hobby of ours.
									</div>
								</div>
					        </Modal>
				      	</div>
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

export default Schoolwork;