import logo from '../logo.png'
import { NavLink } from "react-router-dom"
import { Menu , X} from "lucide-react"
import { useState } from "react";

const NavLinks =() =>{
  return(
      <>
          <NavLink to="/aboutus" className="font-roboto">About Us</NavLink>
          <NavLink to="/academics" className="font-roboto">Academics</NavLink>
          <NavLink to="/RandE" className="font-roboto">R & E</NavLink>
          <NavLink to="/organization" className="font-roboto">Organization</NavLink>
          <NavLink to="/admission" className="font-roboto">Admission </NavLink>
      </>
  );
};

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
      setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="px-12 py-4 bg-white sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between">
        <div className="logo w-1/3 h-full">
          <img src={logo} ></img>
        </div>
        <nav className="flex w-1/3 justify-end">
            <div className="hidden w-full justify-between xl:flex">
                <NavLinks />
            </div>
            <div className="xl:hidden">
                <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
            </div>
        </nav>
      </div>
      <div>
      {isOpen && (
        <div className="flex flex-col bg-white px-12 py-5 h-full absolute right-0 space-y-5">
          <NavLinks className="py-5"/>
        </div>
      )}
      </div>
    </div>
  );
};
