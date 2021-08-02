import React from 'react'
import {FaShoppingCart, FaUserPlus, FaSearch, FaBars} from 'react-icons/fa'
import {BsBell, BsCaretDownFill} from 'react-icons/bs'



const Navbar = () => {
    return (
        <div>
            <header className=" bg-black lg:flex lg:cursor-pointer lg:justify-between">
                
                  <div className="text-white md:text-md lg:text-md ">
                      <div className="left lg:flex lg:items-center">
                          <img className="lg:h-20" src="/images/netflix-logo.png" />
                          <div className="lg:ml-8">
                          <span className="lg:ml-4">Home</span>
                          <span className="lg:ml-4">Series</span>
                          <span className="lg:ml-4">Movies</span>
                          <span className="lg:ml-4">New and Popular</span>
                          <span className="lg:ml-4"> My list</span>
                          </div>
                          
                      </div>
                  </div>
                     
                <div className="right lg:flex lg:items-center  text-white md:text-md lg:text-md lg:mr-10">
                    <FaSearch className="lg:ml-2"/>
                    <span className="lg:ml-2">KIDS</span>
                    <BsBell className="lg:ml-2"/>
                    <img className="lg:h-5 lg:w-5 lg:ml-2 lg:rounded-sm" src="/images/profile.png" alt="" />
                    <BsCaretDownFill className="lg:ml-2" />
                </div>
            </header>
        </div>
    )
}

export default Navbar
