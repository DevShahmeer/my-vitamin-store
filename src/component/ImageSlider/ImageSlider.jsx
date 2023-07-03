import { useState, useEffect } from 'react';
import './ImageSlider.css';

function ImageSlider({ data }) {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
    };

    const prevSlide = () => {
        setSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 3000); // Adjust the interval duration (in milliseconds) as needed

        return () => {
        clearInterval(interval);
        };
    }, []);

    return (
        <div className="carousel">
        <svg
            className="arrow arrow_left"
            onClick={prevSlide}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
        >
            <path fill="#fff" d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z" />
        </svg>
        {data.map((item, idx) => {
            return (
            <img
                src={item.src}
                alt={item.title}
                key={idx}
                className={slide === idx ? 'slide' : 'slide slide-hidden'}
            />
            );
        })}
        <svg
            className="arrow arrow_right"
            onClick={nextSlide}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
        >
            <path fill="#fff" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z" />
        </svg>
        <span className="indicators">
            {data.map((_, idx) => {
            return (
                <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}
                ></button>
            );
            })}
        </span>
        </div>
    );
    }

export default ImageSlider;