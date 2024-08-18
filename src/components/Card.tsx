import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

type CardProps = {
    id: number;
    image: string;
    name: string;
    originalPrice: number;
};

export default function Card({ id, image, name, originalPrice }: CardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id, image, name, price:originalPrice });
        // Optionally, navigate to the Cart Details page
    };

    return (
        <div className="w-full sm:w-64 md:w-72 lg:w-80 m-2 p-4 bg-white rounded-lg shadow-md">
            <div className="relative">
                <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">{name}</h2>
            <div className="mt-2">
                <span className="text-black font-normal font-jost opacity-70">Rs.{originalPrice}</span>
            </div>
            <div className="flex justify-around mt-4 text-gray-600">
                <FaShoppingCart className="w-5 h-5 cursor-pointer hover:text-black" onClick={handleAddToCart} />
                <FaHeart className="w-5 h-5 cursor-pointer hover:text-red-500" />
                <FaSearch className="w-5 h-5 cursor-pointer hover:text-black" />
            </div>
        </div>
    );
}
