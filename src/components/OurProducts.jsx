import React, { useState } from 'react'
import Title from './Title'
import products from "./products"
import Cards from './Cards';
const OurProducts = () => {
    const tabs = ["All", "Fruits", "Vagetables", "Dairy", "SeaFood"];
    const [active, setActive] = useState("All");

    const mapCards = products.map((product, index) => {
        return (
            <Cards key={index} image={product.image} name={product.name}  price={product.price} />)
    })

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

            <div className='grid grid-cols-4 gap-9 mt-20'>
                {mapCards}
            </div>

        </div>
    )
}

export default OurProducts


