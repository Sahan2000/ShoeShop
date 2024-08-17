import Card from "../components/Card.tsx";
import {Key, useEffect, useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import itemDB from "../db/ItemDB.tsx";

export default function NewArrival() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    const newArrivalItems = itemDB.filter((item: { status: string }) => item.status === "New Arrivals");

    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setItemsPerPage(1);  // Mobile view
        } else if (width < 1024) {
            setItemsPerPage(2);  // Tablet view
        } else {
            setItemsPerPage(4);  // Desktop view
        }
    };

    useEffect(() => {
        handleResize();  // Initial call to set the correct itemsPerPage
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const scrollLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const scrollRight = () => {
        if ((currentIndex + 1) * itemsPerPage < newArrivalItems.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <>
            <div className="my-8 relative">
                <h2 className="text-2xl font-bold text-center mb-2">New Arrivals</h2>
                <p className="text-center text-gray-500 mb-6">Say hello to our newest collection</p>
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 focus:outline-none">
                        <FaChevronLeft className="text-gray-600"/>
                    </button>

                    {/* Centering the items */}
                    <div className="flex justify-center overflow-x-hidden scroll-smooth snap-x snap-mandatory">
                        {newArrivalItems.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((item: { id: Key | null | undefined; image: string; name: string; price: string; }) => (
                            <div key={item.id} className="snap-center">
                                <Card
                                    image={item.image}
                                    name={item.name}
                                    originalPrice={item.price}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 focus:outline-none">
                        <FaChevronRight className="text-gray-600"/>
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-4">
                    {Array(Math.ceil(newArrivalItems.length / itemsPerPage)).fill(0).map((_, index) => (
                        <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}