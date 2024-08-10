import { useState, useEffect } from 'react';

const ImageSlider = ({images, interval = 3000}:any) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [images.length, interval]);

    return (
        <div className="relative overflow-hidden w-full h-[400px] max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div
                className="flex transition-transform ease-in-out duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {images.map((image:any, index:any) => (
                    <img
                        key={index}
                        src={`${image.image}`}
                        alt={`Slide ${index}`}
                        className="w-full h-[400px] object-cover sm:h-72 md:h-80 lg:h-96"
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-3xl font-bold sm:text-4xl">Shoes That Define You</h1>
                <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600">
                    Shop Now
                </button>
            </div>

            <div className="absolute bottom-2 w-full flex justify-center space-x-2">
                {images.map((_:any, index:any) => (
                    <span
                        key={index}
                        className={`block w-2 h-2 rounded-full cursor-pointer ${
                            index === currentSlide ? 'bg-white' : 'bg-gray-400'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;