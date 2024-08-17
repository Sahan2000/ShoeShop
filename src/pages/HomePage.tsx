import HeroSection from "../sections/HeroSection.tsx";
import NewArrival from "../sections/NewArrival.tsx";
import CategorySection from "../sections/CategorySection.tsx";
import BestSellers from "../sections/BestSerller.tsx";

export default function HomePage() {
    return(
        <>
            <HeroSection/>
            <NewArrival/>
            <CategorySection/>
            <main className="flex-grow">
                <BestSellers/>
            </main>
        </>
    );
}