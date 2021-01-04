import React from 'react'
import Logo from '../images/logo.png'
import {FaBars, FaSearch, FaShoppingCart, FaUserPlus} from 'react-icons/fa'

const Header = () => {
    return (
        <div>
            <header className="header flex items-center justify-between py-3 xl:mx-20">
                <div className="menu-btn flex">
                    <div className="mx-4">
                        <FaBars/>    
                    </div>
                    <div>
                        <FaSearch/>    
                    </div>
                </div>

            <div className="logo">
                <div>
                    <img src={Logo} alt="MS-logo"/>
                </div>

                <ul>
                    <li className="hover:opacity-70">Microsoft 365</li>
                    <li className="hover:opacity-70">Office</li>
                    <li className="hover:opacity-70">Windows</li>
                    <li className="hover:opacity-70">Surface</li>
                    <li className="hover:opacity-70">Xbox</li>
                    <li className="hover:opacity-70">Deals</li>
                    <li className="hover:opacity-70">Support</li>
                </ul>
            </div>

            <div className="cart flex">

                <div>
                    <FaShoppingCart/>
                </div>
                <div className="mx-4">
                    <FaUserPlus/>
                </div>
            </div>

                <div className="sign-in">
                        <ul>
                            <li className="hover:opacity-70">All Microsotf</li>
                            <li className="hover:opacity-70">Search</li>
                            <li className="hover:opacity-70">Cart</li>
                            <li className="hover:opacity-70">Sign In</li>
                        </ul>
                </div>
                
            </header>
        </div>
    )
}

export default Header
