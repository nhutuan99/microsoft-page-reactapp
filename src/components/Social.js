import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

const Social = () => {
    return (
        <div className="flex items-center py-5 px-8 xl:pl-20">
            <div className="mr-5">
                <h4>Follow Microsoft</h4>
            </div>
        <div className="flex">
            <FaFacebook className="mr-2 text-2xl text-blue-900"/>
            <FaTwitter className="mr-2 text-2xl text-blue-700"/>
            <FaYoutube className="mr-2 text-2xl text-red-700"/>
            <FaInstagram className="mr-2 text-2xl text-orange-700"/>
        </div>
        </div>
    )
}

export default Social
