import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import { useDarkMode } from "../utilities/Hooks/useDarkMode";

const Navbar = () => {

    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <nav className="sticky top-0 w-full z-50 text-gray-800">
            <div className="navbar bg-slate-200 dark:bg-[#1b222d] dark:text-white h-[70px]">
                
                <div className="flex-1 pl-10 mx-2">
                    <Link to="/">
                        <a>
                            <div className="relative top-[9px]">
                                <img src={Logo} alt="/" width="80px" height="80px" draggable="false" />
                            </div>
                        </a>
                    </Link>
                </div>

                {/*<div className='items-center flex '>
                    <span className='px-2 text-slate-700 dark:text-slate-200'><FaMoon /></span>
                    {
                        isDarkMode ? <input type="checkbox" className="toggle bg-rose-500" onChange={toggleDarkMode} /> :
                            <input type="checkbox" className="toggle bg-rose-500" defaultChecked onChange={toggleDarkMode} />
                    }
                    <span className='px-2 text-slate-700 dark:text-slate-200'><FaSun /></span>
                </div>*/}

            </div>
        </nav>
    );
};

export default Navbar;