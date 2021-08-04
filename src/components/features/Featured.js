import React from 'react'
import {FaCaretRight} from 'react-icons/fa'
import {BsInfoCircle} from 'react-icons/bs'

const Featured = () => {
    return (
        <div className="-mt-20 bg-bannerWallpaper bg-center bg-cover h-screen">
            <div className="featured lg:h-1/4 ">
            
          <div className="info lg:w-4/12 lg:absolute lg:top-full">
          <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>

        <div className="buttons">
          <button className="play">
            <FaCaretRight />
            <span></span>
          </button>
          <button className="moreInfo">
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
