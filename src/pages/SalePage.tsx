import Card from "../components/Card.tsx";
import {faSliders} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import itemDB from "../db/ItemDB.tsx";

export default function SalePage() {
    const saleShoes = itemDB.filter((item: { status: string }) => item.status === "Sale");
    return(
        <>
            <div className={"bg-[#f9f9f9] py-10"}>
                <div
                    className={"flex sm:flex-row sm:justify-between sm:px-32 flex-col items-center justify-center px-5"}>
                    <h1 className={"font-jost font-semibold text-4xl"}>Sale</h1>
                    <div className={"flex gap-5 opacity-50 font-jost"}>
                        <a href="/">Home</a>
                        <a href="/shop">Products</a>
                        <a href="/sale">Sale</a>
                    </div>
                </div>
                <div className={"flex sm:flex-row sm:justify-between sm:px-32 flex-col mt-14 px-5 opacity-50"}>
                    <h5 className={"font-jost hidden sm:block"}>Showing 1-15 of 65 results</h5>
                    <h5 className={"font-jost"}>Filter <FontAwesomeIcon icon={faSliders}/></h5>
                </div>
                <div className={"flex flex-wrap justify-center mt-10 items-center"}>
                    {saleShoes.map((item:any) => (
                            <Card image={item.image} name={item.name} originalPrice={item.originalPrice}/>
                        )
                    )}
                </div>
            </div>
        </>
    )
}