import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card.tsx";
import itemDB from "../db/ItemDB.tsx";

export default function KidsPage() {
    const kidsShoes = itemDB.filter((item: { gender: string }) => item.gender === "Kids");
    return(
        <>
            <div className={"bg-[#f9f9f9] py-10"}>
                <div
                    className={"flex sm:flex-row sm:justify-between sm:px-32 flex-col items-center justify-center px-5"}>
                    <h1 className={"font-jost font-semibold text-4xl"}>Kids</h1>
                    <div className={"flex gap-5 opacity-50 font-jost"}>
                        <a href="/">Home</a>
                        <a href="/shop">Products</a>
                        <a href="/kids">Kids</a>
                    </div>
                </div>
                <div className={"flex sm:flex-row sm:justify-between sm:px-32 flex-col mt-14 px-5 opacity-50"}>
                    <h5 className={"font-jost hidden sm:block"}>Showing 1-15 of 65 results</h5>
                    <h5 className={"font-jost"}>Filter <FontAwesomeIcon icon={faSliders}/></h5>
                </div>
                <div className={"flex flex-wrap justify-center mt-10 items-center"}>
                    {kidsShoes.map((item:any) => (
                            <Card key={item.id} image={item.image} name={item.name} originalPrice={item.price} id={item.id}/>
                        )
                    )}
                </div>
            </div>
        </>
    );
}