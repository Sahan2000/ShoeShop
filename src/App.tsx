import Header from "./components/Header.tsx";
import HeroSection from "./sections/HeroSection.tsx";
import NewArrival from "./sections/NewArrival.tsx";
import CategorySection from "./sections/CategorySection.tsx";
import BestSellers from "./sections/BestSerller.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <>
            <Header/>
            <HeroSection/>
            <NewArrival/>
            <CategorySection/>
            <main className="flex-grow">
                <BestSellers/>
            </main>
            <Footer/>
        </>
    );
}

export default App
