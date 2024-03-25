import logo from './assets/logo.png'
import { NavLink } from "react-router-dom"
import { Menu , X} from "lucide-react"
import { useState, useEffect, useRef } from "react";

const NavLinks =() =>{
  return(
      <>
        <NavLink to="/aboutus" className="font-roboto font-medium hover:text-gray-400">About Us</NavLink>
        <NavLink to="/academics" className="font-roboto font-medium hover:text-gray-400">Academics</NavLink>
        <NavLink to="/RandE" className="font-roboto font-medium hover:text-gray-400">R & E</NavLink>
        <NavLink to="/organization" className="font-roboto font-medium hover:text-gray-400">Organization</NavLink>
        <NavLink to="/admission" className="font-roboto font-medium hover:text-gray-400">Admission </NavLink>
      </>
  );
};

const DropDown =() =>{
  return(
      <>
        <NavLink to="/aboutus" className="font-roboto hover:bg-[#852838] border border-solid border-white px-12 py-5">About Us</NavLink>
        <NavLink to="/academics" className="font-roboto hover:bg-[#852838] border border-solid border-white px-12 py-5">Academics</NavLink>
        <NavLink to="/RandE" className="font-roboto hover:bg-[#852838] border border-solid border-white px-12 py-5">R & E</NavLink>
        <NavLink to="/organization" className="font-roboto hover:bg-[#852838] border border-solid border-white px-12 py-5">Organization</NavLink>
        <NavLink to="/admission" className="font-roboto hover:bg-[#852838] border border-solid border-white px-12 py-5">Admission</NavLink>
      </>
  );
};



export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLogo = document.getElementById('logo');
  const navBar = document.getElementById('navBar');

  function toggleNavbar(){
    setIsOpen(!isOpen);
  };
  
  function changeStyle(ref){
    useEffect(()=> {
      if(isOpen){
        navLogo.className = 'hidden'
        navBar.classList.replace("bg-white", "bg-[#C4203B]")
      }
      if(!isOpen){
        try{
          navLogo.className = 'visible'
          navBar.classList.replace("bg-[#C4203B]", "bg-white")
        }
        catch(e){
          console.log(e)
        }
      }
    }, [isOpen])
  }

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

  const buttonRef = useRef();
  changeStyle(buttonRef)

  return (
    <div>
      <div className="top-0 px-12 py-4 bg-white flex-wrap z-[20] mx-auto flex w-full items-center justify-between bg-white" id='navBar'>
        <div className="logo w-2/3 xl:w-1/2 h-full">
            <img id='logo' src={logo} className='visible'></img>
        </div>
        <nav className="flex w-1/3 justify-end">
            <div className="hidden w-full justify-between xl:flex">
                <NavLinks />
            </div>
            <div className="xl:hidden">
                <button onClick={toggleNavbar} ref={buttonRef}>{isOpen ? <X className='bg-white rounded rounded-[1px]'/> : <Menu />}</button>
            </div>
        </nav>
      </div>
      <div>
      {isOpen && (
        <div className="flex flex-col font-roboto font-[500] right-0 h-dvh z-10 bg-[#C4203B] text-white w-full" ref={wrapperRef}>
          <DropDown/>
        </div>
      )}
      </div>
    </div>
  );

};