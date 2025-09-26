import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from './Button'

const Cards = ({image , name  ,  price}) => {
  return (
    <div className='bg-zinc-100 p-5'>
        {/* header */}
      <div className='flex justify-between'>
        <span className='text-3xl text-zinc-300'>
            <FaHeart/>
        </span>
        <button className='bg-gradient-to-b from-[#B4E50D] to-[#98CD00] text-xl px-4 py-3 rounded-lg'>
            <FaPlus/>
        </button>
      </div>
        {/* image */}
      <div>
        <img src={image} alt="" />
      </div>
        {/* content */}
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <Button prop="Shop Now"/>
      </div>
      
    </div>
  )
}

export default Cards
