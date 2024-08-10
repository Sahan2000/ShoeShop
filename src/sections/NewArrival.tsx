import Card from "../components/Card.tsx";

export default function NewArrival(){
    const items = [
        {
            id: 1,
            image: './src/assets/nike1.jpeg',
            name: 'Nike Men\'s Casual Shoe',
            originalPrice: 'Rs.11,999.00',
            salePrice: 'Rs.9,999.00',
            installmentPrice: '₨3,333.00',
        },
        {
            id: 2,
            image: './src/assets/nike2.png',
            name: 'Adidas Men\'s Casual Shoe',
            originalPrice: 'Rs.11,999.00',
            salePrice: 'Rs.9,999.00',
            installmentPrice: 'Rs.3,333.00',
        },
        {
            id: 3,
            image: './src/assets/nike3.png',
            name: 'Puma Men\'s Casual Shoe',
            originalPrice: 'Rs.11,999.00',
            salePrice: 'Rs.9,999.00',
            installmentPrice: 'Rs.3,333.00',
        },
        {
            id: 4,
            image: './src/assets/nike4.png',
            name: 'Reebok Men\'s Casual Shoe',
            originalPrice: 'Rs.11,999.00',
            salePrice: 'Rs.9,999.00',
            installmentPrice: 'Rs.3,333.00',
        },
    ]
    return(
        <>
            <div className="my-8">
                <h2 className="text-2xl font-bold text-center mb-2">New Arrivals</h2>
                <p className="text-center text-gray-500 mb-6">Say hello to our newest collection</p>
                <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory">
                    <div className="flex space-x-4">
                        {items.map((item, index) => (
                            <div key={index} className="snap-center">
                                <Card
                                    image={item.image}
                                    name={item.name}
                                    originalPrice={item.originalPrice}
                                    salePrice={item.salePrice}
                                    installmentPrice={item.installmentPrice}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}