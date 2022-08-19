import { NavLink } from "react-router-dom";
import Logo from '../images/logo.png';
import { useDarkMode } from "../utilities/Hooks/useDarkMode";
import { FaMoon, FaSun} from "react-icons/fa";

const Navbar = () => {

    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <nav className="sticky top-0 w-full z-50 text-gray-800">
            <div className="navbar bg-slate-200 dark:bg-[#1b222d] dark:text-white h-[70px]">
                
                <div className="flex-1 pl-10 mx-2">
                    <NavLink to="/">
                        <a>
                            <div className="relative top-[9px]">
                                <img src={Logo} alt="/" width="80px" height="80px" draggable="false" />
                            </div>
                        </a>
                    </NavLink>
                </div>

                <div className='items-center flex'>
                    <span className='px-2 text-slate-700 dark:text-slate-200'><FaMoon /></span>
                    {
                        isDarkMode ? <input type="checkbox" className="toggle bg-teal-700" onChange={toggleDarkMode} /> :
                            <input type="checkbox" className="toggle bg-teal-700" defaultChecked onChange={toggleDarkMode} />
                    }
                    <span className='px-2 text-slate-700 dark:text-slate-200'><FaSun /></span>
                </div>

                <div className="hidden px-2 mx-2 lg:flex">
                    <div className="flex items-center">
                        <NavLink to='/'>
                            <a className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-2">HOME </a>
                        </NavLink>
                        <NavLink to="/">
                            <a className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-3">COURSES</a>
                        </NavLink>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;