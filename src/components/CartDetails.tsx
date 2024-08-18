import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';

export default function CartDetails() {
    const { cart, setCart } = useCart();
    const [totalAmount, setTotalAmount] = useState(0);

    const handleRemoveFromCart = (id: number) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);// Log the cart items// Update the cart state
    };

    useEffect(() => {
        console.log(cart);
        // Calculate total amount whenever cart changes
        const amount = cart.reduce((total, item) => total + parseFloat(String(item.price)), 0);
        setTotalAmount(amount); // Update total amount state
    }, [cart]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center space-x-4">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                <div>
                                    <h2 className="font-semibold text-lg">{item.name}</h2>
                                    <p className="text-gray-600">Rs.{item.price}</p>
                                </div>
                            </div>
                            <button
                                className="text-red-500 hover:text-red-700 font-semibold"
                                onClick={() => handleRemoveFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-4 font-semibold text-lg">
                        Total Amount: Rs.{totalAmount.toFixed(2)}
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        onClick={() => {
                            // Handle proceed to purchase logic
                            alert('Proceeding to checkout!');
                        }}
                    >
                        Proceed to Purchase
                    </button>
                </div>
            )}
        </div>
    );
}
