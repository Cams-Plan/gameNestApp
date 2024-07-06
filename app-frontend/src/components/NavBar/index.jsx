// packages
import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// compoenents/styles
import '../../assets/styles/NavBar.css'
import {UserSettings} from "../index"
// icons
import { MdShoppingCartCheckout, MdMenu, MdMenuOpen } from "react-icons/md";
import { RiMapPinUserFill } from "react-icons/ri";
// helpers - i.e. custom hooks, utils, contexts/global states
import {useOutsideHeaderClick} from "./helpers";

function Nav() {

    const navigate = useNavigate()
    let [open, setOpen] = useState(false) // control the icon
    const [isVisible, setIsVisible] = useState(false); // hamburger menu icon controller
    const [openSettings, setOpenSettings] = useState(false) // user settings dropdown controller
    
    const ref = useOutsideHeaderClick(handleOutsideClick)

    const navList = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Login",
            path: "/login"
        },
        {
            name: "My Lists",
            path: "/mylists"
        }
    ]
    // for any behaviour we want when users click away from an open nav drop down
    function handleOutsideClick(){ 
        
        setOpenSettings(false)
        return
    }

    function handleUserIcon() {
        setOpenSettings(!openSettings)
    }

    function handleMenu(){
        if(open && openSettings){
            setOpenSettings(false) // we close this too for UX improvements
            setOpen(false)
        }
        else if (!open){
            setOpen(true)
        }
        else {
            setOpen(false)
        }
    }

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (elementIsVisible()) {
                setIsVisible(true)
            }
            else if (!elementIsVisible()){ // set closed to true when icon is hidden
                setOpen(false)
                setIsVisible(false)
            }
        };

        const elementIsVisible = () => {
            const menuIcon = document.getElementById('header-burger-menu');
            if (!menuIcon) return false;

            // Check if the element is visible in the DOM
            const rect = menuIcon.getBoundingClientRect();
            return (
                rect.width > 0 ||
                rect.height > 0 ||
                menuIcon.getClientRects().length > 0
            );
        };

        // Listen for visibility changes
        /* could have performance implications - will adapt this solution later */
        window.addEventListener('resize', handleVisibilityChange);
        window.addEventListener('scroll', handleVisibilityChange);

        // Initial check when component mounts
        handleVisibilityChange();

    // Clean up event listeners
    return () => {
      window.removeEventListener('resize', handleVisibilityChange);
      window.removeEventListener('scroll', handleVisibilityChange);
    };
    }, [isVisible]);

    return (
    <>
    <div ref={ref} id="nav-parent-container"
    className={`flex md:justify-between justify-around items-baseline ${ open ? 'shadow-none' : 'shadow-md'} w-full fixed top-0 left-0 bg-amber-400`}>
        <nav className="md:flex flex-row md:justify-around bg-inherit py-4 md:px-10 px-7">
            <div 
                id="hero-header" 
                onClick={() => navigate("/")}
                className="flex items-center md:mr-10 md:whitespace-nowrap">
                <span className="text-3xl text-amber-100 mr-1 pt-2">
                    <MdShoppingCartCheckout />
                </span>
                <p className="font-bold text-2xl cursor-pointer font-[Poppins] text-gray-800">Foolproof Shopping</p> 
            </div>
            <ul className={`md:flex md:flex-row md:items-center md:pb-0 pb-12 absolute md:static bg-inherit md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 max-[381px]:top-24 opacity-100 shadow-md' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
                {navList.map((navItem, index) => (
                    <li className={index < navList.length ? "mr-4" : ""} key={`li-${navItem.name}`}> {/* no right margin for last nav link */}
                        <NavLink 
                        key={`nav-${navItem.name}`}
                        className="group hover:font-bold duration-150" 
                        to={navItem.path}>{navItem.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="flex-grow"></div>
        <div 
            id="header-burger-menu" 
            className={`text-3xl cursor-pointer md:hidden mx-1`}>
                {open ? 
                <MdMenuOpen onClick={() => handleMenu()} role="menu" className="md:hidden"/> : 
                <MdMenu onClick={() => handleMenu()} role="menu" className="md:hidden" />}
        </div>

        <RiMapPinUserFill 
            id="nav-user-icon"
            role="img"
            aria-label="nav-user-icon"
            size={30}
            onClick={() => handleUserIcon()}
            className="mr-6 justify-self-center cursor-pointer" 
            />
        
    </div>
    <div ref={ref} id="nav-userSettings-container" className={`transition-all duration-500 ease-in ${!openSettings ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
       {/* <UserSettings openSettings={openSettings} setOpenSettings={setOpenSettings} /> */}
        {openSettings ?
            <UserSettings openSettings={openSettings} setOpenSettings={setOpenSettings} handleOutsideClick={handleOutsideClick} /> : null
        }
    </div>
    
    
    <div data-testid={"nav-outlet-container"} className={`w-full h-screen fixed transition-all duration-500 ease-in top-20 ${open && isVisible ? 'mt-28': ''}`}>
        <Outlet/>
    </div>
    </>)
}

export default Nav
