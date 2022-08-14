import Image from "next/image";
import Link from "next/link";
import Logo from '../images/logo.png';
import { useDarkMode } from "../utilities/Hooks/useDarkMode";
import { Toaster } from 'react-hot-toast';

const Navbar = () => {

    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <>
            <nav className="sticky top-0 w-full z-50 text-gray-800">
                <div className="navbar bg-slate-200 dark:bg-[#1b222d] dark:text-white h-[70px]">
                    <div className="flex-1 pl-10 mx-2">
                        <Link href="/">
                            <a>
                                <div className="relative top-[9px]">
                                    <Image
                                        src={Logo}
                                        alt="Chatbot"
                                        width="80px"
                                        height="80px"
                                        draggable="false"
                                    />
                                </div>
                            </a>
                        </Link>
                    </div>

                </div>
            </nav>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    );
};

export default Navbar;