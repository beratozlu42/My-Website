import { PiMountains } from "react-icons/pi";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="left-0 w-full z-50">
            <div className="mx-auto px-5 md:px-15 py-5 flex items-center justify-between">
                <div>
                    <Link href="/"><PiMountains size={40} color="white" /></Link>
                </div>
                <div>
                    <Link href="/contact" className="text-gray-400 font-bold hover:text-white transition-colors duration-300">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar