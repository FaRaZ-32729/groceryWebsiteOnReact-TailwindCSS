import React from 'react'

const Title = ({highLight , normal}) => {
    return (
        <div className='w-fit mx-auto'>
            <h2 className='md:text-5xl text-3xl font-bold'><span className='text-[#98CD00]'>{highLight}</span>{normal}</h2>
            <div className='md:w-34 w-28 h-1 bg-[#98CD00] mt-3 md:mt-4 ml-auto '></div>
        </div>
    )
}

export default Title
