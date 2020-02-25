import React, {useEffect, useState} from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Main } from './../main/main';

const axios = require('axios');


export const Carousel= (props:any)=>{

const options = {
  url: 'http://localhost:3000/server/images.json',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin':'*'
  }
};

let imagesFull:boolean = false;
let [images, setImages] = useState([]);
let [activeImg, setActiveImg] = useState();
let [activeIndex, setActiveIndex] = useState();


let setActive = useEffect(()=>{
		setActiveImg(images[0]);
		setActiveIndex(0)
},[images.length])

	let popoulate =  useEffect(()=>{
		axios(options).then((response:any) => {
		  	setImages(response.data);
		  	imagesFull = true;

			console.log(response.data)		  })
		  .catch((error:any) => {
		  	props = []
		    console.log(error);
		  });
		  console.log(images);	
	},[]);

	let prevImage = ()=>{
		activeIndex = (activeIndex >0 )? (activeIndex - 1): 0 
setActiveImg(images[activeIndex]);
		setActiveIndex(activeIndex)
	}

	let nextImage = ()=>{
		activeIndex = (activeIndex <3  )? (activeIndex + 1): 3 
setActiveImg(images[activeIndex]);
		setActiveIndex(activeIndex)
	}
    
    console.log("rendrrrrrr", activeImg)

	return (<div className="carousel">
			<button onClick={prevImage}> &lt; </button>
			 <section>
			  { activeImg ? 
			  	<img className= "carousel-image" src={"./"+activeImg.src} alt={activeImg.alt}/>
			  	: <span>Loading ...</span>}

			 </section>
			 <button  onClick={nextImage}> &gt; </button>

				
        	</div>
		)

	}