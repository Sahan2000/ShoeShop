import Header from "./components/Header.tsx";
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage.tsx";
import ShopPage from "./pages/ShopPage.tsx";
import WomenPage from "./pages/WomenPage.tsx";
import MenPage from "./pages/MenPage.tsx";
import KidsPage from "./pages/KidsPage.tsx";
import SalePage from "./pages/SalePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import CartDetails from "./components/CartDetails.tsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Component */}
            <Header/>

            {/* Main Content */}
            <main className="flex-grow pt-16">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/cart" element={<CartDetails />} />
                    <Route path="/shop" element={<ShopPage/>}/>
                    <Route path="/women" element={<WomenPage/>}/>
                    <Route path="/men" element={<MenPage/>}/>
                    <Route path="/kids" element={<KidsPage/>}/>
                    <Route path="/sale" element={<SalePage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </main>

            {/* Footer Component */}
            <Footer/>
        </div>
    );
}

export default App
