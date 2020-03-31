
import React from 'react';
import './slider.scss';


export const Slider = (props:any) => {



	let getLabel = () =>{
		switch(props.type){
			case 'pro': return 'Very Strong'; 

			case 'avg': return 'Strong'; 

			case 'beg': return 'Beginner'; 
		}
	}

	let getSliderClass = () =>{
		let className = 'slider-section';
		switch(props.type){
			case 'pro': className+= ' pro-slider-section';break; 

			case 'avg': className+= ' avg-slider-section'; break;

			case 'beg': className+= ' starter-slider-section'; break;
			
		}
		return className;
	}

	let sliderLabel = getLabel();
	let className = getSliderClass() ;


	return (
	<div className= {className}>

		<span className="slider-label"> {sliderLabel}
		 </span>
		
	</div>
	)

}

export const ProSlider= ()=>{

	
return (
	<div className= "pro-slider-section slider-section">

		<span className="slider-label green-text"> Very Strong
		 </span>
		<div className="proficient">
		</div>
	</div>
	)
}

export const AvgSlider= ()=>{

	
return (
	<div className= "avg-slider-section slider-section">

		<span className="slider-label orange-text"> Avg </span>
		<div className="proficient">
		</div>
	</div>
	)
}

