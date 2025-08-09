import React from 'react'
import Grocery from '../assets/grocery.png'
import Button from './Button'
const Hero = () => {
    return (
        <section>
            <div className='max-w-[1400px] min-h-screen mx-auto px-10 flex md:flex-row flex-col-reverse items-center gap-10 md:pt-20 pt-35'>
                <div className='flex-1'>
                    <span className='text-[#98CD00] text-lg bg-lime-200 px-5 py-2 rounded-full'>Export Best Quality</span>
                    <h1 className='capitalize lg:text-7xl/18 text-5xl/14  mt-4 font-bold ' >tasty organic <span className='text-[#98CD00]'>fruits</span> and <span className='text-[#98CD00]' >vaggies</span> in your city</h1>
                    <p className='capitalize text-md md:text-lg text-zinc-700 mt-5 mb-10 ' >Enjoy your meal with our healthy and fresh products</p>
                    <Button prop="Shop Now" />
                </div>
                <div className='flex-1'>
                    <img src={Grocery} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero
