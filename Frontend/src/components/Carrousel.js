import React, { useState } from 'react';
import ArrowAltCircleRight from '../images/vector.png';
import ArrowAltCircleLeft from '../images/vector.png';
function Carrousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }



    return (
        <section className='slider'>
            <img src={ArrowAltCircleLeft} alt="carrousel" className='left-arrow' onClick={prevSlide} />
            <img src={ArrowAltCircleRight} alt="carrousel" className='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}>
                        {index === current && (
                            <img src={slide} alt='carrousel' className='image' />
                        )}
                    </div>
                );
            })}
        </section >
    );
}

export default Carrousel;