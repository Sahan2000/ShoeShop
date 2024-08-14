export default function CategorySection() {
    return (
        <div className={"my-20 flex items-center justify-center gap-16 flex-wrap"}>
            <div className={"flex flex-col items-center cursor-pointer"}>
                <img className={"w-[280px] h-[300px]"} src="./src/assets/MenShoes.jpg" alt=""/>
                <h2 className={"font-jost font-semibold text-2xl"}>Men</h2>
                <h6 className={"font-jost text-sm opacity-50"}>Collection</h6>
            </div>
            <div className={"flex flex-col items-center cursor-pointer"}>
                <img className={"w-[280px] h-[300px]"} src="./src/assets/womenShoe.jpeg" alt=""/>
                <h2 className={"font-jost font-semibold text-2xl"}>Women</h2>
                <h6 className={"font-jost text-sm opacity-50"}>Collection</h6>
            </div>
            <div className={"flex flex-col items-center cursor-pointer"}>
                <img className={"w-[280px] h-[300px]"} src="./src/assets/boyShoe.jpeg" alt=""/>
                <h2 className={"font-jost font-semibold text-2xl"}>Boys</h2>
                <h6 className={"font-jost text-sm opacity-50"}>Collection</h6>
            </div>
            <div className={"flex flex-col items-center cursor-pointer"}>
                <img className={"w-[280px] h-[300px]"} src="./src/assets/girlShoe.jpeg" alt=""/>
                <h2 className={"font-jost font-semibold text-2xl"}>Girls</h2>
                <h6 className={"font-jost text-sm opacity-50"}>Collection</h6>
            </div>
        </div>
    );
}