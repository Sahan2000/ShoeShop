import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return(
        <header className="bg-black h-[60px] flex justify-around items-center ">
            <FontAwesomeIcon className="text-white size-[25px]" icon={faBars} />
            <h1 className="text-[#D4AF37] text-3xl font-judson font-bold ">ShoeShop.</h1>
            <FontAwesomeIcon icon={faCartShopping} className="text-white size-[25px]" />
        </header>
    );
}