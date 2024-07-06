import React, { useEffect, useState } from 'react'
import '../../assets/styles/UserSettings.css'
import { MdLightMode, MdModeNight } from "react-icons/md";


const UserSettings = ({openSettings, setOpenSettings, handleOutsideClick}) => {

    // TODO: get the user details via props or fetch from this component
    
    const [screenMode, setScreenMode] = useState("light-mode-1")

    async function handleScreenMode(){
        // screen mode data hosted in local storage
        console.log("add the dark and light mode styling")
        if (screenMode != "dark-mode-1"){
            localStorage.setItem("screenMode", "dark-mode-1")
            setScreenMode("dark-mode-1")
        }
        else {
            localStorage.removeItem("screenMode")
            setScreenMode("light-mode-1")
        }
    } 

    async function handleLogout(e) {
        console.log("Add the Logout Functionality")

        setOpenSettings(false)
        // refresh or redirect to the home page

    }

    const settings = {
        username: "SAMPLE USER",
        screenMode: "screen mode",
        logout: "Logout",
    }

    useEffect(() => {
        const screenModeData = localStorage.getItem("screenMode")

        screenModeData && setScreenMode("dark-mode-1")
    }, [])

  return (
    <>
    <div 
    id='user-settings-container' data-testid={"nav-user-settings-component"}
    className={`w-40 bg-amber-400 h-[120px] flex flex-row py-2 fixed z-[1] right-0 top-16 pl-4 text-right justify-end pr-5 transition-all duration-500 ease-in ${!openSettings ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
        <ul className={`transition-all duration-500 ease-in ${!openSettings ? 'text-opacity-0 hidden' : 'text-opacity-100'}`}>
            <li className=" font-semibold mb-2.5">
                {settings.username}
            </li>
            <li id={`screen-mode`} className="flex items-center mb-1 text-right">
                <span onClick={() => handleScreenMode()}
                className=' cursor-pointer'>
                    {screenMode == "dark-mode-1" ? <MdLightMode 
                    role='img'
                    aria-describedby='screen-mode'
                    size={16} 
                    className="mr-1 hover:text-gray-200"/>: 
                    <MdModeNight
                    role='img'
                    aria-describedby='screen-mode'
                    size={16}
                    className='mr-2 text-gray-500 hover:text-gray-950'/>}
                
                </span>
                {screenMode == "dark-mode-1" ? "Light Mode": "Dark Mode"}
            </li>
            <li 
            onClick={(e) => {handleLogout(e)}}
            className=" cursor-pointer font-semibold">
                {settings.logout}
            </li>
        </ul>
    </div>
    </>
  )
}

export default UserSettings
