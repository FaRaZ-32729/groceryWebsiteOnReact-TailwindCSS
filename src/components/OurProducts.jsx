import React, { useState } from 'react'
import Title from './Title'
import strawberry from "../assets/strawberry.png"

const OurProducts = () => {
    const tabs = ["All", "Fruits", "Vagetables", "Dairy", "SeaFood"];
    const [active, setActive] = useState("All");
    return (
        <div className='max-w-[1400px] mx-auto px-10 py-20' >
            <Title highLight={"Our"} normal={"Products"} />

            <div className='flex gap-5 justify-center mt-10'>
                {tabs.map((item, index) => {
                    return (
                        <button key={index} className={`rounded-lg px-5 py-2 text-lg cursor-pointer ${active === item ? "bg-gradient-to-b from-[#B4E50D] to-[#98CD00] text-white" : "bg-zinc-100"}`} onClick={() => setActive(item)}>
                            {item}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default OurProducts



const products = [
    {
        id: 1,
        name: "strawbery",
        price: 3.00,
        image: strawberry
    },
]