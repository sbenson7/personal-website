import React, { Component } from 'react';

class FunScott extends Component {

 nextPath(path) {
 	this.props.history.push(path);
 }

  render() {
    return (
    	<div>
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
		      <div className='pic'>
			    <img src="https://s3.amazonaws.com/scott-personal-website/spurs_scott.jpg"/>
			  </div>
		      <div className='fun-description'>
		      	I love playing and watching soccer. My favorite team is Tottenham Hotspur, a soccer team in the English Premier League.
		      </div>
		      <br> 
		      </br>
		      <div className='pic'>
			    <img src="https://s3.amazonaws.com/scott-personal-website/britishscott.jpg"/>
			  </div>
		      <div className='fun-description'>
		      	I’m half British and have dual citizenship! My dad’s from England, and is a huge reason for my love of soccer (football) and Tottenham Hotspur.
		      </div>
		      <br> 
		      </br>
		       <div className='pic'>
			    <img src="https://s3.amazonaws.com/scott-personal-website/scottanimals.jpg"/>
			  </div>
		      <div className='fun-description'>
		      	I love animals, especially cats and dogs. My family has 4 cats, even though i'm allergic to them (I take a bunch of allergy medication). I also volunteer at a couple of animal shelters!
		      </div>
		      <br> 
		      </br>
		      <div className='pic'>
			    <img src="https://s3.amazonaws.com/scott-personal-website/scott76.jpg"/>
			  </div>
		      <div className='fun-description'>
		      	I have a love/hate relationship with the video game Overwatch. 
		      </div>
		    </div>
        </div>    
    )
  }
}

export default FunScott;