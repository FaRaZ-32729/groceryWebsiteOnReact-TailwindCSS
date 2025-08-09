import React from 'react'
import Title from './Title'
import fruit from "../assets/fruits-and-veggies.png"
import meat from "../assets/meat-and-seafood.png"
import dairy from "../assets/dairy-and-eggs.png"
import Button from './Button'

const Category = () => {

    const cards = category.map(card => {
        return (
            <div className='flex-1 ]'>
                <div className=' w-full min-h-[20vh] relative'>
                    <img src={card.image} alt="" className='absolute -bottom-10' />
                </div>
                <div className='bg-[#98CD00]/50 pt-17 p-8 rounded'>
                    <h3 className='text-3xl font-bold'>{card.title}</h3>
                    <p className='mt-3 mb-9 max-h-[20vh]'>{card.discription}</p>
                    <Button prop="See All" />
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className=" max-w-[1400px] mx-auto px-10  py-20">
                <Title highLight="Shop" normal="By Category" />

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:mt-15 mt-10 '>
                    {cards}
                </div>
            </div>
        </section>
    )
}

export default Category



const category = [
    {
        id: 1,
        title: "Fuits & Vegetables",
        discription: "Fresh, handpicked fruits and vegetables delivered straight to your doorstep. Enjoy natural flavors, rich nutrition, and farm-to-table freshness every day.",
        image: fruit
    },
    {
        id: 2,
        title: "Dairy & Eggs",
        discription: "Fresh dairy products and farm-fresh eggs, packed with natural goodness. Creamy, nutritious, and perfect for your daily meals, from hearty breakfasts to delicious desserts",
        image: dairy
    },
    {
        id: 3,
        title: "Meat & SeaFood",
        discription: "Premium quality meat and seafood, sourced with care for unbeatable freshness and flavor. Perfectly cut, packed, and delivered for your favorite recipes.",
        image: meat
    }
]