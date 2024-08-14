import { useState, useEffect } from 'react';
import Button from "./Button.tsx";
import Header from "./Header.tsx";

const ImageSlider = ({imageData, interval = 3000}:any) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % imageData.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [imageData.length, interval]);
    return (
        <>
            <Header/>
            <div className="relative overflow-hidden w-full md:h-[600px] h-[500px] bg-blue-500">
                <div className="flex transition-transform ease-in-out duration-3000"
                     style={{transform: `translateX(-${currentSlide * 100}%)`, width: `${imageData.length}`}}>
                    {imageData.map((image: any, index: any) => (
                        <div key={index} className={"w-full flex shrink-0 md:h-[600px] h-[500px]"}>
                            <img src={`${image.image}`} alt={`Slide ${index}`} className={"w-full object-cover"}/>
                        </div>
                    ))}
                </div>
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-5xl mt-28 font-jost font-extrabold sm:text-4xl lg:text-[50px]">
                        Shoes That Define You
                    </h1>
                    <Button name="Shop Now" className="mt-4" />
                </div>
                {/* Dots */}
                <div className="absolute bottom-2 w-full flex justify-center space-x-2">
                    {imageData.map((_: any, index: any) => (
                        <span
                            key={index}
                            className={`block w-3 h-3 rounded-full cursor-pointer ${
                                index === currentSlide ? 'bg-white' : 'bg-gray-400'
                            }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ImageSlider;