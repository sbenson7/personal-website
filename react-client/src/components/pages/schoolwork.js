import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
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
		        	<div className='schoolwork-box'>
				    	<div className='s-pic'>
				    	<button className="sbttn" onClick={() => this.onOpenModal('0')}><img src="https://s3.amazonaws.com/scott-personal-website/Canvas.png"/></button>
					        <Modal open={this.state.open0} onClose={() => this.onCloseModal('0')} center>
					        <div className='school-modal'>
					        	<div className='center'>
						            <div className='work-welcome'>
						           		Canvas
						           	</div>
						    		<div className='pic'>
										<img src="https://s3.amazonaws.com/scott-personal-website/Canvas.png"/>
									</div>
								    <div className='work-description-small'>
								    	Canvas was a project for my Graphic Design class. This is the logo for 
								    </div>
								</div>
					        </div>
					        </Modal>				        
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('1')}><img src="https://s3.amazonaws.com/scott-personal-website/Dog.png"/></button>
					        <Modal open={this.state.open1} onClose={() => this.onCloseModal('1')} center>
					        	<div className='center'>
					           		<div className='work-welcome'>
					           			Dog
					           		</div>
						           	<div className='pic'>
										<img src="https://s3.amazonaws.com/scott-personal-website/Dog.png"/>
									</div>
									<div className='work-description-small'>
									    This was one of my first experiences using Adobe Illustrator.
									</div>
								</div>
					        </Modal>				        
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('2')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial1.png"/></button>
					        <Modal open={this.state.open2} onClose={() => this.onCloseModal('2')} center>
					        	<div className='center'>
						            <div className='work-welcome'>
						           		Tutorial 1
						           	</div>
						           	<div className='pic'>
											<img src="https://s3.amazonaws.com/scott-personal-website/Tutorial1.png"/>
									</div>
									<div className='work-description-small'>
									    	This was one of my first experiences using Adobe After Effects.
									</div>
								</div>
					        </Modal>				        
				        </div>
				   		<div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('3')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial2.png"/></button>
					        <Modal open={this.state.open3} onClose={() => this.onCloseModal('3')} center>
					        	<div className='center'>
						            <div className='work-welcome'>
						           		Tutorial 2
						           	</div>
						           	<div className='pic'>
											<img src="https://s3.amazonaws.com/scott-personal-website/Tutorial2.png"/>
									</div>
									<div className='work-description-small'>
									    	This was one of my first experiences using Adobe After Effects.
									</div>
								</div>
					        </Modal>				        
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('4')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial3.png"/></button>
					        <Modal open={this.state.open4} onClose={() => this.onCloseModal('4')} center>
					        	<div className='center'>
						            <div className='work-welcome'>
						           		Tutorial 3
						           	</div>
						           	<div className='pic'>
											<img src="https://s3.amazonaws.com/scott-personal-website/Tutorial3.png"/>
									</div>
									<div className='work-description-small'>
									    	This was one of my first experiences using Adobe After Effects.
									</div>
								</div>
					        </Modal>
				        </div>
				        <div className='s-pic'>
				      		<button className="sbttn" onClick={() => this.onOpenModal('5')}><img src="https://s3.amazonaws.com/scott-personal-website/Tutorial4.png"/></button>
					        <Modal open={this.state.open5} onClose={() => this.onCloseModal('5')} center>
					        	<div className='center'>
						            <div className='work-welcome'>
						           		Tutorial 4
						           	</div>
						           	<div className='pic'>
											<img src="https://s3.amazonaws.com/scott-personal-website/Tutorial4.png"/>
									</div>
									<div className='work-description-small'>
									    	This was one of my first experiences using Adobe After Effects.
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
			    	<div className='hpic'>
			      		<img src="https://s3.amazonaws.com/scott-personal-website/fun_and_work_scott.jpg"/>
			        </div>
			    	<br> 
			   		</br>
			        <div className='funscott-small'>
			        	<button className="fbttn-small" onClick={() => this.nextPath('/funscott')}>
			            	Meet Fun Scott!
			        	</button>
			        </div>   
			        <div className='workscott-small'>
			        	<button className="wbttn-small" onClick={() => this.nextPath('/workscott')}>
			           		Meet Work Scott!
			        	</button> 
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