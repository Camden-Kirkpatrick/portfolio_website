"use client";
import { NavLinks } from '@/constant/constant'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type NavProps = {
    openMobileNav: () => void;
}

const Nav = ({openMobileNav}: NavProps) => {

    // Track whether the nav should show a background (true once scrolled past 90px).
    // useState returns [currentValue, setterFunction]. Starts as false.
    const [navBg, setNavBg] = useState(false);

    // useEffect runs side effects (things outside React, like browser APIs).
    // The empty dependency array [] means: run this ONCE when the component mounts.
    useEffect(() => {
        // Define what should happen on each scroll event.
        // We're not calling this now — just describing it so the browser can call it later.
        const handler = () => {
            // window.scrollY = pixels scrolled from the top of the page.
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };

        // Hand the handler to the browser: "call this every time the user scrolls."
        window.addEventListener("scroll", handler);

        // Cleanup: React calls this function when the component unmounts.
        // Detaching the listener prevents memory leaks and stale callbacks.
        return () => window.removeEventListener("scroll", handler);
    }, []) // <- [] = only run on mount, never re-run


  return (
    <div className={`transition-all ${navBg ? "bg-[#0f142ed9] shadow-md" : "fixed" } duration-200 h-[12vh] z-10000 fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='w-5 h-5 text-black' />
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>CAMDEN</h1>
            </div>
            {/* nav links */}
            <div className='hidden lg:flex items-center space-x-10'>
                {NavLinks.map((link) => {
                    return (
                        <a key={link.id} href={link.url} className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'>
                            <p>{link.label}</p>
                        </a>
                    )
                })}
            </div>
            {/* buttons */}
            <div className='flex items-center space-x-4'>
                {/* Resume button */}
                <a
                    href='/Camden_Kirkpatrick_Resume.pdf'
                    download='Camden_Kirkpatrick_Resume.pdf'
                    className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'
                >
                    <BiDownload className='w-5 h-5 '/>
                    <span>Download Resume</span>
                </a>
                {/* Burger Menu */}
                <HiBars3BottomRight onClick={openMobileNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
            </div>
        </div>
    </div>
  )
}

export default Nav;