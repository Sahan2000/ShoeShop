import React, {useState} from 'react';

interface Shoe {
    id: number;
    image: string;
    name: string;
    price: string;
    category: 'Men' | 'Women' | 'Boys' | 'Girls';
}

const shoes: Shoe[] = [
    {
        id: 1,
        image: './src/assets/nike1.jpeg',
        name: 'Nike Men\'s Casual Shoe',
        price: 'Rs. 11,990.00',
        category: 'Men',
    },
    {
        id: 2,
        image: './src/assets/nike2.png',
        name: 'Nike Women\'s Running Shoe',
        price: 'Rs. 12,990.00',
        category: 'Women',
    },
    {
        id: 3,
        image: './src/assets/nike3.png',
        name: 'Nike Boys\' Sports Shoe',
        price: 'Rs. 9,990.00',
        category: 'Boys',
    },
    {
        id: 4,
        image: './src/assets/nike4.png',
        name: 'Nike Girls\' Running Shoe',
        price: 'Rs. 8,990.00',
        category: 'Girls',
    },
    // Add more shoes as needed
];

const BestSellers: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<'Men' | 'Women' | 'Boys' | 'Girls'>('Men');

    const filteredShoes = shoes.filter(shoe => shoe.category === selectedCategory);

    return (
        <div className="bg-[#F5F5F5] max-w-screen-lg mx-auto p-4">
            <h2 className="text-2xl font-bold text-center my-8">This Month’s Best Sellers</h2>
            <div className="flex justify-center mb-8">
                <ul className="flex space-x-8 text-gray-600">
                    <li
                        className={`cursor-pointer ${selectedCategory === 'Men' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setSelectedCategory('Men')}
                    >
                        Men
                    </li>
                    <li
                        className={`cursor-pointer ${selectedCategory === 'Women' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setSelectedCategory('Women')}
                    >
                        Women
                    </li>
                    <li
                        className={`cursor-pointer ${selectedCategory === 'Boys' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setSelectedCategory('Boys')}
                    >
                        Boys
                    </li>
                    <li
                        className={`cursor-pointer ${selectedCategory === 'Girls' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setSelectedCategory('Girls')}
                    >
                        Girls
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredShoes.map(shoe => (
                    <div key={shoe.id} className="text-center">
                        <img src={shoe.image} alt={shoe.name} className="w-full h-auto object-cover" />
                        <h3 className="mt-4 text-lg font-medium">{shoe.name}</h3>
                        <p className="text-gray-600">{shoe.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BestSellers;
