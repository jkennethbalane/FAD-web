import logo from './assets/logo.png'
import { NavLink } from "react-router-dom"
import { Menu , X} from "lucide-react"
import { useState, useEffect, useRef } from "react";

const NavLinks =() =>{
  return(
      <>
        <NavLink to="/aboutus" className="font-roboto font-medium text-black hover:text-gray-400">About Us</NavLink>
        <NavLink to="/academics" className="font-roboto font-medium text-black hover:text-gray-400">Academics</NavLink>
        <NavLink to="/RandE" className="font-roboto font-medium text-black hover:text-gray-400">R & E</NavLink>
        <NavLink to="/organization" className="font-roboto font-medium text-black hover:text-gray-400">Organization</NavLink>
        <NavLink to="/admission" className="font-roboto font-[500] text-black hover:text-gray-400">Admission </NavLink>
      </>
  );
};



export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const sideNav = document.getElementById('sideNav')
  const toggleNavbar = () => {
      setIsOpen(!isOpen);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
      function swipeDown(event){
        setIsOpen(false)
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchmove", swipeDown);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchmove", swipeDown);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div>
      <div className="top-0 px-12 py-4 bg-white flex-wrap z-[20] mx-auto flex w-full items-center justify-between" id='navBar'>
        <div className="logo w-2/3 xl:w-1/2 h-full">
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
        <div className="flex flex-col fixed right-0 h-dvh z-10 bg-white w-1/2 space-y-10 py-20 md:py-36 text-center" ref={wrapperRef}>
          <NavLinks className="" />
        </div>
      )}
      </div>
    </div>
  );

};