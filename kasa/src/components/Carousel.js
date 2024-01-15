import React, { useState } from 'react';

const Carousel = ({ pictures }) => {

	// Initialisation currentSlide variable
	const [currentSlide, setCurrentSlide] = useState(0);

	function updateSlide(offset) {
		let index = currentSlide + offset
		if (index >= pictures.length) {
			index = 0
		} else if (index < 0) {
			index = pictures.length - 1
		}
		setCurrentSlide(index)
		console.log(currentSlide);
	}

	function left() {
		updateSlide(-1);
	}
	function right() {
		updateSlide(1);
	}

	const showArrows = pictures.length > 1;

	return (
		<section className='carousel'>
			{showArrows && (
				<>
					<svg onClick={left} className='arrow-left' xmlns="http://www.w3.org/2000/svg" height="79.2" width="46.68" viewBox="0 0 320 512"><path fill='#fff' d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
					<svg onClick={right} className='arrow-right' xmlns="http://www.w3.org/2000/svg" height="79.2" width="46.68" viewBox="0 0 320 512"><path fill='#fff' d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
					<span>{currentSlide + 1}/{pictures.length}</span>
				</>
			)}
			<img src={pictures[currentSlide]} alt="Photo" />
		</section>
	);
};

export default Carousel;



