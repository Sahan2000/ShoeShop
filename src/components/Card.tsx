export default function Card({ image, name, originalPrice, salePrice, /*installmentPrice*/ }:any) {
    return (
        <div className="flex-none w-64 m-2 p-4 bg-white rounded-lg shadow-md">
            <div className="relative">
                <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg"/>
                {salePrice && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">SALE!</span>
                )}
            </div>
            <h2 className="mt-4 text-lg font-semibold">{name}</h2>
            <div className="mt-2">
                {originalPrice && <span className="line-through text-gray-500 mr-2">{originalPrice}</span>}
                <span className="text-black font-bold">{salePrice || originalPrice}</span>
            </div>
            {/*{installmentPrice && (
                <div className="text-sm text-gray-500 mt-1">
                    OR 3 X <span className="text-black font-bold">{installmentPrice}</span> WITH
                    <span className="text-blue-600 font-bold"> mintpay</span>
                </div>
            )}*/}
        </div>
    );
}