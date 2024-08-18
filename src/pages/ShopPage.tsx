import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card.tsx";
import itemDB from "../db/ItemDB.tsx";

const words = ["Design", "Fashion", "Modern"];
export default function ShopPage() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className="relative w-full h-[40vh] bg-black">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{backgroundImage: "url('./src/assets/shopImage.png')"}}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Centered Text with Auto-Slide Animation */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h1 className="text-white sm:text-5xl text-3xl font-bold transition-opacity duration-1000 ease-in-out opacity-100">
                        {words[currentWordIndex]}
                    </h1>
                </div>
            </section>
            <div className={"bg-[#F5F5F5] py-10"}>
                <div className={"flex sm:flex-row sm:justify-between sm:px-32 flex-col px-5 opacity-50"}>
                    <h5 className={"font-jost hidden sm:block"}>Showing 1-15 of 65 results</h5>
                    <h5 className={"font-jost"}>Filter <FontAwesomeIcon icon={faSliders} /></h5>
                </div>
                <div className={"flex flex-wrap justify-center mt-10 items-center"}>
                    {itemDB.map((item: any) => (
                        <Card
                            key={item.id} // Use a unique identifier like item.id
                            image={item.image}
                            name={item.name}
                            originalPrice={item.price}
                         id={item.id}/>
                    ))}
                </div>
            </div>
        </>
    );
}
