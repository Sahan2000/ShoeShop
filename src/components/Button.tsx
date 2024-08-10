export default function Button({name}:any) {
    return (
        <button className="mt-4 bg-yellow-500 font-judson text-[18px] text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-600">
            {name}
        </button>
    );
}