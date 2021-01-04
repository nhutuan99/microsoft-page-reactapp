import React from 'react'
import holidayImg from '../images/this_holiday_539.png'

const ThisHoliday = () => {
    return (
        <section className="hero this-holiday xl:mx-20">
        <div>
            <img src={holidayImg} alt="holiday-img" className="hero-img"/>
        </div>

        <div className="overlay bg-gray-800 text-center px-10 py-20 text-white sm:bg-transparent sm:text-left">
            <h2 className="font-semibold text-xl mb-2">This Holiday, find your joy</h2>
            <p className="mb-2 text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo distinctio, commodi voluptatem eligendi aut perspiciatis impedit facere rerum adipisci fugit quia dicta nesciunt excepturi, veniam perferendis sequi. Omnis, eaque sit.</p>
            <button className="mr-4 bg-white text-black py-2 px-5 hover:underline hover:bg-opacity-80">
                Watch Now
            </button>
        </div>
    </section>
    )
}

export default ThisHoliday
