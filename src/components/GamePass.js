import React from 'react'
import showImg from '../images/game_pass_539.png'

const GamePass = () => {
    return (
        <section className="hero gamepass-hero xl:mx-20">
            <div>
                <img src={showImg} alt="xboxgame-img" className="hero-img"/>
            </div>

            <div className="overlay bg-gray-800 text-center px-10 py-20 text-white sm:bg-transparent sm:text-left">
                <h2 className="font-semibold text-xl mb-2">Xbox Game Pass Ultimate</h2>
                <p className="mb-4 text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo distinctio, commodi voluptatem eligendi aut perspiciatis impedit facere rerum adipisci fugit quia dicta nesciunt excepturi, veniam perferendis sequi. Omnis, eaque sit.</p>
                <button className="mr-4 bg-white text-black py-2 px-5 hover:underline hover:bg-opacity-80">
                    Join Now
                </button>
                <button className="border: none">Compare all plans</button>
            </div>
        </section>
    )
}

export default GamePass
