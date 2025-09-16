import React from 'react'
import Title from './Title'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import vegetables from "../assets/basket-full-vegetables.png"

const Values = () => {
    const leftSideValues = values.slice(0, 2).map(item => {
        return (
            <div className='flex md:flex-row-reverse items-center gap-7'>
                <div >
                    <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-[#B4E50D] to-[#98CD00] w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='md:text-right' >
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    });
    const rightSideValues = values.slice(2).map(item => {
        return (
            <div className='flex items-center gap-7' >
                <div >
                    <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-[#B4E50D] to-[#98CD00] w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='' >
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    });
    return (
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Title highLight="Our" normal="Values" />

            <div className="flex gap-15 md:gap-5 mt-15 md:flex-row flex-col">
                <div className='md:min-h-100 gap-15 flex flex-col justify-between' >
                    {leftSideValues}
                </div>

                <div className=' hidden md:flex w-1/2'>
                    <img src={vegetables} />
                </div>

                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {rightSideValues}
                </div>
            </div>
        </div>
    )
}

export default Values


const values = [
    {
        id: 1,
        title: "Trust",
        para: "We believe in honesty, transparency, and genuine care for every customer.",
        icon: <FaHeart />,
    },
    {
        id: 2,
        title: "Always Fresh",
        para: "We deliver only the freshest ingredients, maintaining quality from farm to table.",
        icon: <FaLeaf />,
    },
    {
        id: 3,
        title: "Food Safety",
        para: "We follow strict safety standards ensuring every product remains safe and healthy.",
        icon: <FaShieldAlt />,
    },
    {
        id: 4,
        title: "100% Organic",
        para: "We provide fully organic products grown naturally, without harmful chemicals or pesticides.",
        icon: <FaSeedling />,
    },
]
