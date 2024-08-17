import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';
type CardProps = {
    image: string;
    name: string;
    originalPrice: string;
};
export default function Card({ image, name, originalPrice }: CardProps) {
    return (
        <div className="w-full sm:w-64 md:w-72 lg:w-80 m-2 p-4 bg-white rounded-lg shadow-md">
            <div className="relative">
                <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg"/>
            </div>
            <h2 className="mt-4 text-lg font-semibold">{name}</h2>
            <div className="mt-2">
                <span className="text-black font-normal font-jost opacity-70">{originalPrice}</span>
            </div>
            <div className="flex justify-around mt-4 text-gray-600">
                <FaShoppingCart className="w-5 h-5 cursor-pointer hover:text-black"/>
                <FaHeart className="w-5 h-5 cursor-pointer hover:text-red-500"/>
                <FaSearch className="w-5 h-5 cursor-pointer hover:text-black"/>
            </div>
        </div>
    );
}