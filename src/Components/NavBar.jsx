import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-5">
                            <NavLink><li>Home</li></NavLink>
                            <NavLink><li>Listed Books</li></NavLink>
                            <NavLink><li>Pages to Read</li></NavLink>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1   flex gap-10">
                        <NavLink to={'/'}  className={({isActive}) => isActive? 'text-[#23BE0A] border border-[#23BE0A] font-bold px-6 py-3 rounded-md ' : 'font-bold text-black'}><li>Home</li></NavLink>
                        <NavLink to={'/listedBook'}  className={({isActive}) => isActive? 'text-[#23BE0A] border border-[#23BE0A] font-bold px-6 py-3 rounded-md ' : 'font-bold text-black'}><li>Listed Books</li></NavLink>
                        <NavLink to={'/readPage'}  className={({isActive}) => isActive? 'text-[#23BE0A] border border-[#23BE0A] font-bold px-6 py-3 rounded-md ' : 'font-bold text-black'}><li>Pages to Read</li></NavLink>
                        
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <button className="btn bg-[#23BE0A] text-white px-7">Sign in</button>
                    <button className="btn bg-[#59C6D2] text-white px-7">Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;