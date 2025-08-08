import React from 'react'

const Button = ({prop}) => {
    return (
        <button className='bg-gradient-to-b from-[#B4E50D] to-[#98CD00] text-white px-8 py-3 rounded-lg  text-lg hover:scale-105 transition-all duration-300 cursor-pointer hover:to-[#8AA624] ' >
            {prop}
        </button>
    )
}

export default Button
