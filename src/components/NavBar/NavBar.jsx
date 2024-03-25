import { NavLink } from "react-router-dom";

const NavBar = () => {
    const links = <>
        <NavLink to="/" className={({isActive})=> isActive ? 'text-[#23BE0A] font-semibold' : ''}>Home</NavLink>
        <NavLink to="/listed_books" className={({isActive})=> isActive ? 'text-[#23BE0A] font-semibold' : ''}>Listed Books</NavLink>
        <NavLink to="/pages_read" className={({isActive})=> isActive ? 'text-[#23BE0A] font-semibold' : ''}>Pages to Read</NavLink>
        <NavLink to="/new_books" className={({isActive})=> isActive ? 'text-[#23BE0A] font-semibold' : ''}>New Books</NavLink>
        <NavLink to="/about" className={({isActive})=> isActive ? 'text-[#23BE0A] font-semibold' : ''}>About</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="btn text-white bg-[#23BE0A]">Sign In</a>
                    <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;