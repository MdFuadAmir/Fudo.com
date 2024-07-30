import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";

const links =[
  {
    id:1,
    name:"Home",
    path:"/"
  },
  {
    id:2,
    name:"Why Fudo",
    path:"/whyfudo"
  },
  {
    id:3,
    name:"Servisces",
    path:"/services"
  },
  {
    id:4,
    name:"Menu",
    path:"/menu"
  },
  {
    id:5,
    name:"Contact",
    path:"/contact"
  },
]

const Header = () => {
    return (
       <>
       <div className="navbar bg-red-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow">
          {
            links.map((link) => <Link className="px-4 py-2 font-bold text-lg hover:bg-red-400 hover:text-white rounded-xl duration-500" key={link.id} to={link.path}>{link.name}</Link>)
          }
      </ul>
    </div>
    <a className="btn btn-ghost hover:bg-red-200 text-xl"><span className="text-2xl text-red-500">F</span> u d o</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
          {
            links.map((link) => <Link className="px-4 py-2 font-bold text-lg hover:bg-red-400 duration-500 hover:text-white rounded-2xl" key={link.id} to={link.path}>{link.name}</Link>)
          }
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn rounded-full px-8 bg-red-400 text-white hover:bg-red-500">Login <CiLogin size={20}/></button>
  </div>
</div>
       </>
    );
};

export default Header;