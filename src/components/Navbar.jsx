import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <header className='fixed top-0 right-0 left-0 z-50' >
            <nav className=' bg-white max-w-[1400px] mx-auto px-10 md:h-[12vh] h-[10vh] items-center flex justify-between'>
                <a href="#" className='text-2xl font-bold'><span className='text-[#98CD00]'>T</span>aza<span className='text-[#98CD00]' >G</span>ro</a>

                {/* desktop menu */}
                <ul className='md:flex items-center gap-x-15 hidden '>
                    <li><a href="#" className='font-semibold tracking-wider text-[#98CD00]' >Home</a></li>
                    <li><a href="#" className='font-semibold tracking-wider hover:text-[#98CD00] ' >About</a></li>
                    <li><a href="#" className='font-semibold tracking-wider hover:text-[#98CD00]' >Contact</a></li>
                    <li><a href="#" className='font-semibold tracking-wider hover:text-[#98CD00]' >Process</a></li>
                </ul>

                <div className='flex gap-x-5 items-center' >

                    <div className='md:flex hidden items-center p-1 border-2 border-[#98CD00] rounded-full'>
                        <input type="text" name='text' placeholder='search...' id='text' autoComplete='off' className='flex-1 h-[4vh] px-3  focus:outline-none ' />
                        <button className=' bg-gradient-to-b from-[#B4E50D] to-[#98CD00] w-8 h-8 flex items-center justify-center rounded-full text-xl'>
                            <IoSearch />
                        </button>
                    </div>
                    <a href="#" className='text-2xl'>
                        <FaHeart />
                    </a>
                    <a href="#" className='text-2xl'>
                        <MdOutlineAddShoppingCart />
                    </a>


                    <a href="#" className='text-2xl md:hidden' onClick={toggleMenu}>
                        {showMenu ? <BiMenuAltRight /> : <RiMenuFill />}
                    </a>
                </div>



                {/* mobile menu */}
                <ul className={`flex flex-col gap-y-12 bg-[#98CD00]/40 backdrop-blur-xl p-10 items-center gap-x-15 md:hidden rounded-xl absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu && "left-1/2"} `}>
                    <li><a href="#" className='font-semibold tracking-wider ' >Home</a></li>
                    <li><a href="#" className='font-semibold tracking-wider  ' >About</a></li>
                    <li><a href="#" className='font-semibold tracking-wider ' >Contact</a></li>
                    <li><a href="#" className='font-semibold tracking-wider ' >Process</a></li>
                    <li className='flex md:hidden items-center p-1 border-2 border-[#98CD00] rounded-full'>
                        <input type="text" name='text' placeholder='search...' id='text' autoComplete='off' className='flex-1 h-[4vh] px-3  focus:outline-none ' />
                        <button className=' bg-gradient-to-b from-[#B4E50D] to-[#98CD00] w-8 h-8 flex items-center justify-center rounded-full text-xl'>
                            <IoSearch />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
