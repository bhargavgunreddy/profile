	import React, {useEffect, useState} from 'react'

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

		let [images, setImages] = useState([]);
		let [activeImg, setActiveImg] = useState();
		let [activeIndex, setActiveIndex] = useState();

		 useEffect(()=>{
			axios(options).then((response:any) => {
				setImages(response.data);
			})
			  .catch((error:any) => {
				props = []
			  });
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
		
		return (<div className="carousel">
					<button onClick={prevImage}> &lt; </button>
				 	<section className="images-section">
				  		{ activeImg ? 
							<img className= "carousel-image" src={"./"+activeImg.src} alt={activeImg.alt}/>
							: <span>Loading ...</span>}

				 	</section>
				 	<button  onClick={nextImage}> &gt; </button>
				</div>
			)

	}