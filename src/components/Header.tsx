import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faCartShopping, faHeart, faMagnifyingGlass, faTimes} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-black text-white w-full fixed z-50">
            <div className="flex justify-between items-center py-4 px-6 md:px-16">
                {/* Hamburger Menu Icon (Visible on small screens) */}
                <div className="xl:hidden">
                    <FontAwesomeIcon
                        icon={isMenuOpen ? faTimes : faBars}
                        size="2x"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="cursor-pointer"
                    />
                </div>

                {/* Logo (Centered on small screens) */}
                <div className="text-[#D4AF37] font-bold text-3xl text-center flex-grow xl:flex-grow-0">
                    ShoeShop.
                </div>

                {/* Cart Icon (Visible on small screens) */}
                <div className="md:hidden">
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        size="2x"
                        className="cursor-pointer"
                    />
                </div>

                {/* Navigation (Hidden on small screens) */}
                <nav className="hidden xl:flex space-x-8 uppercase text-base">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Shop</a>
                    <a href="#" className="hover:underline">Women</a>
                    <a href="#" className="hover:underline">Men</a>
                    <a href="#" className="hover:underline">Kids</a>
                    <a href="#" className="hover:underline">Sale</a>
                    <a href="#" className="hover:underline">Contact</a>
                </nav>

                {/* Icons and Search Bar (Hidden on small screens) */}
                <div className="hidden md:flex items-center space-x-4">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
                    <input
                        className="border-2 border-gray-300 px-4 py-2 rounded-lg text-black"
                        type="search"
                        placeholder="Search..."
                    />
                    <FontAwesomeIcon icon={faCartShopping} size="lg"/>
                    <FontAwesomeIcon icon={faHeart} size="lg"/>
                </div>
            </div>

            {/* Mobile Menu (Visible on small screens when opened) */}
            {isMenuOpen && (
                <nav className="xl:hidden bg-black w-full flex flex-col items-center space-y-4 py-6">
                    <a href="#" className="text-lg uppercase hover:underline">Home</a>
                    <a href="#" className="text-lg uppercase hover:underline">Shop</a>
                    <a href="#" className="text-lg uppercase hover:underline">Women</a>
                    <a href="#" className="text-lg uppercase hover:underline">Men</a>
                    <a href="#" className="text-lg uppercase hover:underline">Kids</a>
                    <a href="#" className="text-lg uppercase hover:underline">Sale</a>
                    <a href="#" className="text-lg uppercase hover:underline">Contact</a>
                </nav>
            )}
        </header>
    );
}