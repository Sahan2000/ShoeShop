import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTiktok, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <footer className="bg-white py-0 border-t">
            <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div>
                    <h3 className="font-bold mb-4">About Styler</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Brands</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Categories</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Help</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>Order Tracking</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Exchange & Return Policy</li>
                        <li>Payment Method</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Newsletter</h3>
                    <p className="text-gray-600 mb-4">
                        Sign up to get the latest on new Products, Promotions, Design news and more
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border border-gray-300 px-4 py-2 w-full"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-600 text-white px-4 py-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>

            <div className="bg-black text-white py-4 m-0">
                <div
                    className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p>TEL: +9477 456 0882 - SHOESHOP.LK</p>
                    </div>

                    <div className="flex space-x-4">
                        <a href="#" className="text-white">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href="#" className="text-white">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href="#" className="text-white">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="#" className="text-white">
                            <FontAwesomeIcon icon={faTiktok}/>
                        </a>
                    </div>

                    <div className="text-center md:text-right">
                        <p>COPYRIGHT - SHOESHOP.LK - 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}