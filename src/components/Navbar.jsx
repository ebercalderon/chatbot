import { NavLink } from "react-router-dom";
import Logo from '../images/logo.png';
import { useDarkMode } from "../utilities/Hooks/useDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {

    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <nav className="sticky top-0 w-full z-50 text-gray-800">
            <div className="navbar bg-slate-200 dark:bg-[#1b222d] dark:text-white h-[70px]">
                <div className="flex-1 pl-10 mx-2">
                    <li>
                        <NavLink to="/">
                            <div className="relative top-[9px] shadow-md">
                                <img src={Logo} alt="/" width="80px" height="80px" draggable="false" />
                            </div>
                        </NavLink>
                    </li>
                </div>
                <div className='items-center flex'>
                    <span className='px-2 text-slate-700 dark:text-slate-200'><FaMoon /></span>
                    {
                        isDarkMode ? <input type="checkbox" className="toggle bg-teal-600" onChange={toggleDarkMode} /> :
                            <input type="checkbox" className="toggle bg-teal-600" defaultChecked onChange={toggleDarkMode} />
                    }
                    <span className='px-2 text-slate-700 dark:text-slate-200'><FaSun /></span>
                </div>
                <div className="hidden px-2 mx-2 lg:flex">
                    <div className="flex items-center">
                        <li>
                            <NavLink to='/' className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-2">
                                OPTION 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-3">
                                OPTION 2
                            </NavLink>
                        </li>
                    </div>
                </div>
                <div className="flex-none lg:hidden dropdown dropdown-left">
                    <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul tabIndex="0" className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2">
                        <li>
                            <NavLink to='/' className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-2">
                                OPTION 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3">
                                OPTION 2
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;