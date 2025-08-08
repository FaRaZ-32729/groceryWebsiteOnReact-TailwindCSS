import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
    return (
        <header className='fixed top-0 right-0 left-0' >
            <nav className='max-w-[1400px] mx-auto px-10 h-[12vh] items-center flex justify-between'>
                <a href="#" className='text-2xl font-bold'><span className='text-[#98CD00]'>T</span>aza<span className='text-[#98CD00]' >G</span>ro</a>

                {/* desktop menu */}
                <ul className='flex items-center gap-x-15'>
                    <li><a href="#" className='font-semibold tracking-wider text-[#98CD00]' >Home</a></li>
                    <li><a href="#" className='font-semibold tracking-wider hover:text-[#98CD00] ' >About</a></li>
                    <li><a href="#" className='font-semibold tracking-wider hover:text-[#98CD00]' >Contact</a></li>
                    <li><a href="#" className='font-semibold tracking-wider hover:text-[#98CD00]' >Process</a></li>
                </ul>

                <div className='flex gap-x-5 items-center' >

                    <div className='flex items-center p-1 border-2 border-[#98CD00] rounded-full'>
                        <input type="text" name='text' placeholder='search...' id='text' autoComplete='off' className='flex-1 h-[4vh] px-3  focus:outline-none' />
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
                </div>

            </nav>
        </header>
    )
}

export default Navbar
