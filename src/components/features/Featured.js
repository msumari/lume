import React from 'react'
import {FaCaretRight} from 'react-icons/fa'
import {BsInfoCircle} from 'react-icons/bs'

const Featured = () => {
    return (
        <div className="bg-bannerWallpaper bg-center bg-cover h-screen">
       
          <div className="features">
          <div className="info lg:w-4/12  lg:ml-20 ">
          <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>

        <div className="buttons lg:flex lg:mt-4">
          <button className="play bg-white flex items-center lg:px-4 lg:py-2 lg:mr-3 rounded">
            <FaCaretRight />
            <span>Play</span>
          </button>
          <button className="moreInfo bg-gray-400 flex items-center lg:px-4 lg:py-2 rounded">
            <BsInfoCircle />
            <span>Info</span>
          </button>

        </div>

          </div>

          </div>
        
        </div>
    )
}

export default Featured
